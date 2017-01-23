# product-checkout

## Usage
```
npm install && npm start
```
## Tools
- React 
- Redux
- Redux-saga
- React-bootstrap

## Design
I prefer redux-saga for handling asynchronous flows because it's easy to read and its delegated execution makes testing easy. I used react-bootsrap to handle most of my styling and react-router to handle page transitions. 

I opted to use a select for the US state form field rather than a textbox to make it more explicit to the user what values are accepted.



## Things that could be improved
- Items should be cached.
- Should add unit tests.
- In a production application I would eject from create-react-app in order to be able to configure webpack.
- Panels should grow in height to accommodate items with many features.
- Panels should stack into a column when on a small screen.
