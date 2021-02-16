const blogsData = [
    {
        id: 1,
        title: `Lorem Ipsum`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 2,
        title: `Where is Superman?`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 3,
        title: `Batman a Villain?`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 4,
        title: `New hero the Green Lantern`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 5,
        title: `Programming is fun`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 6,
        title: `Justice League new movie`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 7,
        title: `10 Health tips for you`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 8,
        title: `10 Cutest pictures of cats`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 9,
        title: `What not to do in a stoplight`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 10,
        title: `How do you sleep?`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 11,
        title: `JavaScript is hard`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
    {
        id: 12,
        title: `John Cena`,
        articleDetail: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto necessitatibus distinctio magni, pariatur tempora tempore ut? Laborum iure voluptatem fugit illo. Ab dicta laudantium commodi quibusdam ipsa iure! Amet pariatur nulla repudiandae nemo nostrum aspernatur, corporis optio! Vel, maxime expedita debitis veritatis temporibus, delectus numquam, facere dignissimos ducimus eius quo neque quae distinctio voluptate est provident. Quod itaque quidem asperiores?`
    },
]

export default blogsData