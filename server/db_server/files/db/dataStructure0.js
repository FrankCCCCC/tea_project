const config = {
    config:{
        fb_link: "fb_link TEXT",
        ig_link: "ig_link TEXT",

    },
    order: {
        table_name: "orders_table",
        id: {key: "id", schema: "id serial PRIMARY KEY NOT NULL"},
        order_id: {key: "order_id", schema: "order_id uuid DEFAULT uuid_generate_v4()"},
        buyer_name: {key: "buyer_name", schema:"buyer_name TEXT NOT NULL"},
        phone: {key: "phone", schema: "phone TEXT NOT NULL"},
        email: {key: "email", schema: "email TEXT NOT NULL"},
        bank_code: {key: "bank_code", schema: "bank_code TEXT NOT NULL"},
        bank_account: {key: "bank_account", schema: "bank_account TEXT NOT NULL"},
        country: {key: "country", schema: "country TEXT NOT NULL"},
        province: {key: "province", schema: "province TEXT NOT NULL"},
        county: {key: "county", schema: "county TEXT NOT NULL"},
        township: {key: "township", schema: "township TEXT NOT NULL"},
        village: {key: "village", schema: "village TEXT NOT NULL"},
        road: {key: "road", schema: "road TEXT NOT NULL"},
        items: {key: "items", schema: "items OrderItem[] NOT NULL"},
        total_price: {key: "total_price", schema: "total_price NUMERIC NOT NULL"},
        agree_polcy: {key: "agree_polcy", schema: "agree_polcy BOOLEAN NOT NULL"},
        agree_promotion: {key: "agree_promotion", schema: "agree_promotion BOOLEAN NOT NULL"},
        is_paid: {key: "is_paid", schema: "is_paid BOOLEAN NOT NULL"},
        is_send: {key: "is_send", schema: "is_send BOOLEAN NOT NULL"},
        is_recieved: {key: "is_recieved", schema: "is_recieved BOOLEAN NOT NULL"},
        comment: {key: "comment", schema: "comment JSON"},
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"},
        latest_modify: {key: "latest_modify", schema: "latest_modify TIMESTAMP default current_timestamp"}
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
        id: {key: "id", schema: "id serial PRIMARY KEY NOT NULL"},
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
        items: {key: "items", schema: "items Good ARRAY"}, // id, name Array
        cover_img: {key: "cover_img", schema: "cover_img TEXT NOT NULL"},
        imgs: {key: "imgs", schema: "imgs TEXT[]"},
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"},
        latest_modify: {key: "latest_modify", schema: "latest_modify TIMESTAMP default current_timestamp"},
    },
    item: {
        table_name: "items_table",
        type_name: "Item",
        id: {key: "id", schema: "id serial PRIMARY KEY NOT NULL"},
        name: {key: "name", schema: "name TEXT NOT NULL"},
        // producer: {key: "producer", schema: "producer INTEGER REFERENCE farmers_table(id) ON  DELETE CASCADE"},
        producer: {key: "producer", schema: "producer Producer NOT NULL"}, // id Array
        price: {key: "price", schema: "price NUMERIC NOT NULL"},
        unit: {key: "unit", schema: "unit TEXT NOT NULL"},
        description: {key: "description", schema: "description TEXT NOT NULL"}, // Markdown Format
        spec: {key: "spec", schema: "spec Spec ARRAY"}, // 
        cover_img: {key: "cover_img", schema: "cover_img TEXT NOT NULL"},
        imgs: {key: "imgs", schema: "imgs TEXT[]"}, // String Array
        create_on: {key: "create_on", schema: "create_on TIMESTAMP default current_timestamp"}
    },
    Section: {
        type_name: "Section",
        title: {key: "title", schema: "title TEXT"},
        subtitle: {key: "subtitle", schema: "subtitle TEXT"},
        description: {key: "description", schema: "description TEXT"}, // Markdown Format
        img: {key: "img", schema: "img TEXT"},
    },
    Producer: {
        type_name: "Producer",
        id: {key: "id", schema: "id INTEGER"},
        name: {key: "name", schema: "name TEXT"}
    },
    Spec: {
        type_name: "Spec",
        property: {key: "property", schema: "property TEXT"},
        value: {key: "value", schema: "value TEXT"},
        comment: {key: "comment", schema: "comment TEXT"},
    },
    Good: {
        type_name: "Good",
        id: {key: "id", schema: "id INTEGER"},
        name: {key: "name", schema: "name TEXT"}
    },
    OrderItem: {
        type_name: "OrderItem",
        id: {key: "id", schema: "id INTEGER"},
        name: {key: "name", schema: "name TEXT"},
        quantity: {key: "quantity", schema: "quantity INTEGER"},
        price: {key: "price", schema: "price NUMERIC NOT NULL"},
        unit: {key: "unit", schema: "unit TEXT NOT NULL"},
    }
}

exports.dataStructure = config;