const ds = require('./dataStructure');
const Db = require('./Db')
const util = require('../util/Util')

function createPostsTable(){
    let command = `CREATE TABLE IF NOT EXISTS ${ds.dataStructure.post.table_name}(${ds.dataStructure.post.id.schema},${ds.dataStructure.post.title.schema},${ds.dataStructure.post.subtitle.schema},${ds.dataStructure.post.author.schema},${ds.dataStructure.post.content.schema},${ds.dataStructure.post.cover_img.schema},${ds.dataStructure.post.create_on.schema}, ${ds.dataStructure.post.latest_modify.schema})`;

    return Db.query(command)
}

function queryPostsCountAll(){
    let command = `SELECT COUNT(*) FROM ${ds.dataStructure.post.table_name};`;
    
    return Db.query(command)
}

function queryPostList(count, offset){
    util.checkInt(count)
    util.checkInt(offset)

    let row_counts = ""
    let row_offset = ""
    if(count == -1){
    }else{
        row_counts = "LIMIT " + String(count);
    }

    if(offset < 0){
    }else{
        row_offset = "OFFSET " + String(offset);
    }
    let command = `SELECT * FROM ${ds.dataStructure.post.table_name} ORDER BY ${ds.dataStructure.post.latest_modify.key} DESC ${row_counts} ${row_offset};`
    

    return Db.query(command)
}

function queryPost(id){
    util.checkInt(id)
    let command = `SELECT * FROM ${ds.dataStructure.post.table_name} WHERE ${ds.dataStructure.post.id.key} = '${Number(id)}';`
    
    return Db.query(command)
}

function insertPost(title, subtitle, author, content, cover_img){
    util.checkString(title)
    util.checkString(subtitle)
    util.checkString(author)
    util.checkString(content)
    util.checkString(cover_img)
    var content_new = content.replace(/'/g, `''`);
    let command = `INSERT INTO ${ds.dataStructure.post.table_name}(${ds.dataStructure.post.title.key}, ${ds.dataStructure.post.subtitle.key}, ${ds.dataStructure.post.author.key}, ${ds.dataStructure.post.content.key}, ${ds.dataStructure.post.cover_img.key}) VALUES('${title}', '${subtitle}', '${author}', '${util.shortStr(content_new)}', '${cover_img}') RETURNING ${ds.dataStructure.post.id.key};`
    
    return Db.query(command)
}

// query_test();
// create_slider();
// insert_slider_data('test.jpg', 'test_title', 'test_subtitle');
// create_posts_table();
let content = `# Remarkable

> Experience real-time editing with Remarkable!

Click the \`clear\` link to start with a clean slate, or get the \`permalink\` to share or save your results.

***

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

***

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,

Remarkable -- awesome

"Smartypants, double quotes"

'Smartypants, single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Deleted text~~

Superscript: 19^th^

Subscript: H~2~O

++Inserted text++

==Marked text==


## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


## Definition lists

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


## Abbreviations

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language


***

__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You'll like those projects! :)
`
for(let i=0; i<10; i++){
    insertPost('Test Title', 'Test Subtile', 'Test Author', content, 'child.jpg');
}
// query_posts(-1);

// util.log(ds.dataStructure.post.title)
// queryPostsCountAll()

// pool.end();

exports.createPostsTable = createPostsTable;
exports.queryPostsCountAll = queryPostsCountAll;
exports.queryPostList = queryPostList;
exports.queryPost = queryPost;
exports.insertPost = insertPost;