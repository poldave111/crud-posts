const initialState = {
    posts : [
    {
        id: '1',
        title: 'First Article',
        shortDescription: 'Short description of the first article...',
        content: 'Main content of the first article',
        publishedDate: '02-02-2022',
        author: 'John Doe',
        category: 'weather',
      },
      {
        id: '2',
        title: 'Second Article',
        shortDescription: 'Short description of the second article...',
        content: 'Main content of the second article',
        publishedDate: '03-15-2022',
        author: 'Jane Smith',
        category: 'music',
      },
      {
        id: '3',
        title: 'Third Article',
        shortDescription: 'Short description of the third article...',
        content: 'Main content of the third article',
        publishedDate: '05-20-2022',
        author: 'Bob Johnson',
        category: 'sport'

      },
    ], 
    categories : [
      'weather', 
      'news',
      'sport',
    ]
};


export default initialState;