const { mapResult } = require('../api/util');
const { BlogPost } = require('../../models');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    const post_id = req.params.id
    const posts = await BlogPost.findAll({
        where: {
            id: post_id,
        }
    });

    return res.render('update-post-form', {
        posts: mapResult(posts)
    });
});


module.exports = router;