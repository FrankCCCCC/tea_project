const config = {
    config:{
        fb_link: "fb_link TEXT",
        ig_link: "ig_link TEXT",

    },
    post: {
        table_name: "posts_table",
        id: {key: "id", schema: "id serial PRIMARY KEY NOT NULL"},
        title: {key: "title", schema: "title TEXT NOT NULL"},
        subtitle: {key: "subtitle", schema: "subtitle TEXT NOT NULL"},
        author: {key: "author", schema:"author TEXT NOT NULL"},
        content: {key: "content", schema: "content TEXT NOT NULL"},
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"},
        latest_modify: {key: "latest_modify", schema: "latest_modify TIMESTAMP default current_timestamp"},
        cover_img: {key: "cover_img", schema: "cover_img TEXT"}
    },
    farmer: {
        table_name: "farmers_table",
        id: {key: "id", schema: "id serial PROMARY KEY NOT NULL"},
        name: {key: "name", schema: "name TEXT NOT NULL"},
        country: {key: "country", schema: "country TEXT NOT NULL"},
        province: {key: "province", schema: "province TEXT NOT NULL"},
        county: {key: "county", schema: "county TEXT NOT NULL"},
        township: {key: "township", schema: "township TEXT NOT NULL"},
        village: {key: "village", schema: "village TEXT NOT NULL"},
        road: {key: "road", schema: "road TEXT NOT NULL"},
        slogan: {key: "slogan", schema: "slogan TEXT"},
        description: {key: "description", schema: "description TEXT NOT NULL"}, // Markdown Format
        content: {key: "content", schema: "content Section ARRAY NOT NULL"},
        items: {key: "items", schema: "items JSON"}, // id Array
        cover_img: {key: "cover_img", schema: "cover_img TEXT NOT NULL"},
        imgs: {key: "imgs", schema: "imgs JSON"},
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"}
    },
    item: {
        table_name: "items_table",
        type_name: "Item",
        id: {key: "id", schema: "id serial PROMARY KEY NOT NULL"},
        name: {key: "name", schema: "name TEXT NOT NULL"},
        producer: {key: "producer", schema: "producer TEXT NOT NULL"},
        price: {key: "price", schema: "price NUNERIC NOT NULL"},
        unit: {key: "unit", schema: "unit TEXT NOT NULL"},
        description: {key: "description", schema: "description TEXT NOT NULL"}, // Markdown Format
        spec: {key: "spec", schema: "spec JSON"}, // 
        cover_img: {key: "cover_img", schema: "cover_img TEXT NOT NULL"},
        imgs: {key: "imgs", schema: "imgs JSON"}, // String Array
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"}
    },
    section: {
        type_name: "Section",
        title: {key: "title", schema: "title TEXT NOT NULL"},
        subtitle: {key: "subtitle", schema: "subtitle TEXT NOT NULL"},
        description: {key: "description", schema: "description TEXT NOT NULL"}, // Markdown Format
        img: {key: "img", schema: "img TEXT NOT NULL"},
    }
    // img: {
    //     name: "name TEXT NOT NULL",
    //     caption_title: "caption_title TEXT",
    //     caption_subtitle: "",
    //     caption_description: ""
    // }
}

exports.dataStructure = config;