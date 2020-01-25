const db = require('./db.js');
const express = require('express');
const { Remarkable } = require('remarkable');

var app = express()
var post_action = express();

const config = {
    success: 'Success',
    error: "Error"
    
}

post_action.post('/insert_post', (req, res) => {
    
    db.insert_post(req.query.title, req.query.subtitle, req.query.author, `<h1>Remarkable</h1>
    <blockquote>
    <p>Experience real-time editing with Remarkable!</p>
    </blockquote>
    <p>Click the <code>clear</code> link to start with a clean slate, or get the <code>permalink</code> to share or save your results.</p>
    <hr>
    <h1>h1 Heading</h1>
    <h2>h2 Heading</h2>
    <h3>h3 Heading</h3>
    <h4>h4 Heading</h4>
    <h5>h5 Heading</h5>
    <h6>h6 Heading</h6>
    <h2>Horizontal Rules</h2>
    <hr>
    <hr>
    <hr>
    <h2>Typographic replacements</h2>
    <p>Enable typographer option to see result.</p>
    <p>© © ® ® ™ ™ § § ±</p>
    <p>test… test… test… test?.. test!..</p>
    <p>!!! ??? ,</p>
    <p>Remarkable – awesome</p>
    <p>“Smartypants, double quotes”</p>
    <p>‘Smartypants, single quotes’</p>
    <h2>Emphasis</h2>
    <p><strong>This is bold text</strong></p>
    <p><strong>This is bold text</strong></p>
    <p><em>This is italic text</em></p>
    <p><em>This is italic text</em></p>
    <p><del>Deleted text</del></p>
    <p>Superscript: 19<sup>th</sup></p>
    <p>Subscript: H<sub>2</sub>O</p>
    <p><ins>Inserted text</ins></p>
    <p><mark>Marked text</mark></p>
    <h2>Blockquotes</h2>
    <blockquote>
    <p>Blockquotes can also be nested…</p>
    <blockquote>
    <p>…by using additional greater-than signs right next to each other…</p>
    <blockquote>
    <p>…or with spaces between arrows.</p>
    </blockquote>
    </blockquote>
    </blockquote>
    <h2>Lists</h2>
    <p>Unordered</p>
    <ul>
    <li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
    <li>Sub-lists are made by indenting 2 spaces:
    <ul>
    <li>Marker character change forces new list start:
    <ul>
    <li>Ac tristique libero volutpat at</li>
    </ul>
    <ul>
    <li>Facilisis in pretium nisl aliquet</li>
    </ul>
    <ul>
    <li>Nulla volutpat aliquam velit</li>
    </ul></li>
    </ul></li>
    <li>Very easy!</li>
    </ul>
    <p>Ordered</p>
    <ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    </ol>
    <ol>
    <li>You can use sequential numbers…</li>
    <li>…or keep all the numbers as <code>1.</code></li>
    </ol>
    <p>Start numbering with offset:</p>
    <ol start="57">
    <li>foo</li>
    <li>bar</li>
    </ol>
    <h2>Code</h2>
    <p>Inline <code>code</code></p>
    <p>Indented code</p>
    <pre><code>// Some comments
    line 1 of code
    line 2 of code
    line 3 of code
    </code></pre>
    <p>Block code “fences”</p>
    <pre><code><span class="hljs-title">Sample</span> text here...
    </code></pre>
    <p>Syntax highlighting</p>
    <pre><code class="language-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(bar)</span> </span>{
      <span class="hljs-keyword">return</span> bar++;
    };
    
    <span class="hljs-built_in">console</span>.log(foo(<span class="hljs-number">5</span>));
    </code></pre>
    <h2>Tables</h2>
    <table>
    <thead>
    <tr><th>Option</th><th>Description</th></tr>
    </thead>
    <tbody>
    <tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr>
    <tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr>
    <tr><td>ext</td><td>extension to be used for dest files.</td></tr>
    </tbody>
    </table>
    <p>Right aligned columns</p>
    <table>
    <thead>
    <tr><th style="text-align:right">Option</th><th style="text-align:right">Description</th></tr>
    </thead>
    <tbody>
    <tr><td style="text-align:right">data</td><td style="text-align:right">path to data files to supply the data that will be passed into templates.</td></tr>
    <tr><td style="text-align:right">engine</td><td style="text-align:right">engine to be used for processing templates. Handlebars is the default.</td></tr>
    <tr><td style="text-align:right">ext</td><td style="text-align:right">extension to be used for dest files.</td></tr>
    </tbody>
    </table>
    <h2>Links</h2>
    <p><a href="http://dev.nodeca.com">link text</a></p>
    <p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>
    <p>Autoconverted link <a href="https://github.com/nodeca/pica">https://github.com/nodeca/pica</a> (enable linkify to see)</p>
    <h2>Images</h2>
    <p><img src="https://octodex.github.com/images/minion.png" alt="Minion">
    <img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p>
    <p>Like links, Images also have a footnote style syntax</p>
    <p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p>
    <p>With a reference later in the document defining the URL location:</p>
    <h2>Footnotes</h2>
    <p>Footnote 1 link<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup>.</p>
    <p>Footnote 2 link<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup>.</p>
    <p>Inline footnote<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup> definition.</p>
    <p>Duplicated footnote reference<sup class="footnote-ref"><a href="#fn2" id="fnref2:1">[2]</a></sup>.</p>
    <h2>Definition lists</h2>
    <dl>
    <dt>Term 1</dt>
    <dd><p>Definition 1
    with lazy continuation.</p>
    </dd>
    <dt>Term 2 with <em>inline markup</em></dt>
    <dd><p>Definition 2</p>
    <pre><code>  { some code, part of Definition 2 }
    </code></pre>
    <p>Third paragraph of definition 2.</p>
    </dd>
    </dl>
    <p><em>Compact style:</em></p>
    <dl>
    <dt>Term 1</dt>
    <dd>Definition 1
    </dd>
    <dt>Term 2</dt>
    <dd>Definition 2a
    </dd>
    <dd>Definition 2b
    </dd>
    </dl>
    <h2>Abbreviations</h2>
    <p>This is <abbr title="Hyper Text Markup Language">HTML</abbr> abbreviation example.</p>
    <p>It converts &quot;<abbr title="Hyper Text Markup Language">HTML</abbr>&quot;, but keep intact partial entries like “xxxHTMLyyy” and so on.</p>
    <hr>
    <p><strong>Advertisement :)</strong></p>
    <ul>
    <li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
    resize in browser.</li>
    <li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
    i18n with plurals support and easy syntax.</li>
    </ul>
    <p>You’ll like those projects! :)</p>
    <hr class="footnotes-sep">
    <section class="footnotes">
    <ol class="footnotes-list">
    <li id="fn1"  class="footnote-item"><p>Footnote <strong>can have markup</strong></p>
    <p>and multiple paragraphs. <a href="#fnref1" class="footnote-backref">↩</a></p>
    </li>
    <li id="fn2"  class="footnote-item"><p>Footnote text. <a href="#fnref2" class="footnote-backref">↩</a> <a href="#fnref2:1" class="footnote-backref">↩</a></p>
    </li>
    <li id="fn3"  class="footnote-item"><p>Text of inline footnote <a href="#fnref3" class="footnote-backref">↩</a></p>
    </li>
    </ol>
    </section>`, req.query.cover_img).then(
        (resolve) => {
            
            console.log(resolve);
            res.send(config.success)
        }
    ).catch(
        (reject) => {
            console.log("Error: ", reject);
            res.send(reject)
        }
    )
})

post_action.get('/query_post', (req, res) => {
    db.query_post(parseInt(req.query.id, 10)).then(
        (resolve) => {
            var md = new Remarkable()
            var res_post = resolve.rows[0];
            // console.log(resolve)
            // console.log(md.render(resolve.rows[0].content))
            // res_post.content = md.render(resolve.rows[0].content)
            // console.log(res_post)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(JSON.stringify(res_post));
        }
    ).catch(
        (reject) => {
            console.log("Error: ", reject)
            res.header("Access-Control-Allow-Origin", "*");
            res.send(reject)
        }
    );
})

post_action.get('/query_post_list', (req, res) => {
    db.query_post_list(parseInt(req.query.count, 10)).then(
        (resolve) => {
            res.send(JSON.stringify(resolve.rows));
            // console.log(JSON.parse(JSON.stringify(resolve.rows)));
            // res.send(resolve.rows);
    }).catch(
        (reject) => {
        console.log("Error: ", reject);
        res.send(reject)
    });
});

app.use("/post_action", post_action)

app.listen(8000);
