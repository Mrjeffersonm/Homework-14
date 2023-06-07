const router = require('express').Router();
const { BlogPost, User } = require('../../models');
const { mapResult } = require('./util');


router.get('/', async (req, res) => {
    const posts = await  BlogPost.findAll({
        attributes: ['title', 'body', 'id'],
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
    console.log({
       
        posts: results,
    });
    return res.render(
        'dashboard',
        {
            
            posts: results,
        }
    );
});

router.get('/:id', async (req, res) => {
    const post_id = req.params.id
    const posts = await BlogPost.findAll({
        where: {
            id: post_id,
        }
    });
    res.send(
      JSON.stringify(posts, null, 2)
    )   
});

router.post('/', async (req, res) => {
    try {
        const user_id = req.session.user.id;
        const post = {...req.body, user_id: user_id}
        const createItem = await BlogPost.create(post)
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

module.exports = router;