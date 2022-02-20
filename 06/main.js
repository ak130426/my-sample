const post100 = {
  'id': 100,
  'title': 'テスト投稿100のタイトルです'
}
const comments = [
  {
    'postid': 100,
    'comment': '1つ目のコメントです。'
  },
  {
    'postid': 200,
    'comment': 'コメントテストです。'
  },
  {
    'postid': 100,
    'comment': 'テスト投稿のコメント2つ目です。'
  },
]

function getComment(post, commentList) {
  return commentList.filter( comment => {
    return comment.postid === post.id;
  });
}
const result = getComment(post100, comments);
console.log(result);

