'use strict';

hexo.extend.generator.register("search-data", hexo_generator_json);

function hexo_generator_json(locals) {
    var json = '{"code" : 0 ,"data" : [';

    locals.posts.each(function (post, i) {
        json = json + '{ "title": "' + post.title;
        if (post.tags.length > 0) {
            json = json + ' - ';
        }
        post.tags.each(function (tag, i) {
            if (i != 0) {
                json = json + ',';
            }
            json = json + tag.name;
        });
        json = json + '",';
        json = json + '"url":';
        json = json + '"' + post.permalink + '"';
        json = json + '}';
        if (i != locals.posts.length - 1) {
            json = json + ',';
        }

    });

    json = json + ']}';
    hexo.route.set('search/cb-search.json', json);
    return json;
}
