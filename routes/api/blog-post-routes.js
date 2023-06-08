const router = require('express').Router();
const { BlogPost, User , Comment } = require('../../models');
const { mapResult } = require('./util');

router.get('/user', async (req, res) => {
    if (req.session.authenticated !== true) {
        return res.redirect('/forms/login')
    }
    user_id = req?.session?.user?.id;
    const posts = await  BlogPost.findAll({
        attributes: ['title', 'body', 'id', 'date'],
        include: {
            model: User,
            attributes: ['user_name', 'id']
        },
        where: {
            user_id: user_id
        }
    });
    
    var results = [];
    mapResult(posts).forEach(element => {
        results.push({...element, editable: element.user.id == user_id})
    });
    return res.render(
        'dashboard',
        {
            user: req.session.user,
            userView: true,
            posts: results,
        }
    );
});

router.get('/', async (req, res) => {
    const posts = await  BlogPost.findAll({
        attributes: ['title', 'body', 'id', 'date'],
        include: {
            model: User,
            attributes: ['user_name', 'id']
        },
    });
    user_id = req?.session?.user?.id;
    var results = [];
    mapResult(posts).forEach(element => {
        results.push({...element, editable: element.user.id == user_id})
    });
    return res.render(
        'dashboard',
        {
            user: req.session.user,
            posts: results,
        }
    );
});

router.get('/:id', async (req, res) => {
    if (req.session.authenticated !== true) {
        return res.redirect('/forms/login')
    }
    const post_id = req.params.id;
    const posts = await BlogPost.findAll({
        where: {
            id: post_id,
        },
        include: [
            {
                model: User,
                attributes: ['user_name', 'id']
            },
        ],
    });

    const comments = await Comment.findAll({
        where: {
            blogpost_id: post_id,
        },
        include: [
           {
                model: User,
                attributes: ['user_name', 'id']
            },
        ],
    });

    return res.render(
        'comment',
        {
            user: req.session.user,
            posts: mapResult(posts),
            comments: mapResult(comments)
        }
    );
});

router.post('/', async (req, res) => {
    try {
        const user_id = req.session.user.id;
        const post = {...req.body, user_id: user_id}
        const createdItem = await BlogPost.create(post)
        res.redirect('/api/posts');
      }
      catch(err) {
        
        res.send(
          JSON.stringify({error: err.message}, null, 2)
        )
    }
});

router.post('/:id', async (req, res) => {
    const post_id = req.params.id
    const post = await BlogPost.update(req.body,
    {
        where: {
            id: post_id,
        },
    })
    res.redirect('/api/posts');

});

router.post('/delete/:id', async (req, res) => {
    const post_id = req.params.id
    const post = await BlogPost.destroy(
        {
            where: {
                id: post_id
            },
        }
    )
    
    console.log(mapResult(post));
    res.redirect('/api/posts');
});

router.post('/comment/:id', async (req, res) => {
    if (req.session.authenticated !== true) {
        return res.redirect('/forms/login')
    }
    const post_id = req.params.id;
    const user_id = req.session.user.id;
    const comment = {...req.body, user_id: user_id, blogpost_id: parseInt(post_id)}
    const createdItem = await Comment.create(comment)
    console.log(mapResult(createdItem));
    
    res.redirect(`/api/posts/${post_id}`);
});

module.exports = router;