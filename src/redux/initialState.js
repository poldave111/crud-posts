const initialState = {
    posts : [
    {
        id: '1',
        title: 'First Article',
        shortDescription: 'Short description of the first article...',
        content: 'Main content of the first article',
        publishedDate: new Date(),
        author: 'John Doe',
        category: 'weather',
      },
      {
        id: '2',
        title: 'Second Article',
        shortDescription: 'Short description of the second article...',
        content: 'Main content of the second article',
        publishedDate: new Date(),
        author: 'Jane Smith',
        category: 'news',
      },
      {
        id: '3',
        title: 'Third Article',
        shortDescription: 'Short description of the third article...',
        content: 'Main content of the third article',
        publishedDate: new Date(),
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