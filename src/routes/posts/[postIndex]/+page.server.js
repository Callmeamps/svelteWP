import {allPosts} from "../../../stores/posts"

for ( let post in Object.entries(allPosts)) {
    console.log(post)
}