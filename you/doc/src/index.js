import React from 'react'
import ReactDOM from 'react-dom'

// 初级版本
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );


// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// ) 

// 升级版本
// function NumberList(props) {
//     const numbers = props.numbers
//     const listItems = numbers.map((number) => 
//         <li>{number}</li>
//     )
//     return (
//         <ul>{listItems}</ul>
//     )
// }

// const numbers = [1, 2, 3, 4, 5]
// ReactDOM.render(
//     <NumberList numbers = {numbers} />,
//     document.getElementById('root')
// )

// 带 key 版本
// function NumberList(props) {
//     const numbers = props.numbers
//     const listItems = numbers.map((number) => 
//         <li key = {number.toString()}>
//             {number}
//         </li>
//     )

//     return (
//         <ul>{ listItems }</ul>
//     )
// }

// const numbers = [1, 2, 3, 4, 5]
// ReactDOM.render(
//     <NumberList numbers = {numbers} />,
//     document.getElementById('root')
// )

// 带 Key 升级版本
// function ListItem(props) {
//     return <li>{props.value}</li>;
//   }

// function NumberList(props) {
//     const numbers = props.numbers
//     const listItems = numbers.map((number) => 
//         <ListItem key = {number.toString()}
//                   value = {number} />
//     )

//     return (
//         <ul>
//             { listItems }
//         </ul>
//     )
// }


// const numbers = [1, 2, 3, 4, 5]
// ReactDOM.render(
//     <NumberList numbers = {numbers} />,
//     document.getElementById('root')
// )

// key 值唯一性
function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts.map((post) => 
                    <li key = {post.id}>
                        { post.title }
                    </li>
                )
            }
        </ul>
    )

    const content = props.posts.map((post) => 
            <div key = {post.id}>
                <h3>{post.id}</h3>
                <p>{post.content}</p>
            </div>
    )
    
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}

const posts = [
    {id: 1, title: 'Hello, world!', content: 'Welcom to learning React'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
]

ReactDOM.render(
    <Blog posts = {posts} />,
    document.getElementById('root')
)

