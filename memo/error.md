# 💢 error

#### ❌ ️Operator '+' cannot be applied to types 'Number' and 'number'.
❗ error code example
```tsx
export interface Post{
  likes: Number
}

function Test(){
  let [post, setPost] = useState<Post[]>([
    { id: 1, title: "제목1", contents: "내용1", likes: 0 },
  ]);
  
  return (
    <>
      <button onClick={()=> {
        let _post = [...post];
        _post[0].likes = _post[0].likes + 1; // error
        setPost(_post);
      }}></button>
    </>
  )
}
```
❓ error 
```text
- 기본 number 타입이 아닌 객체 유형인 Number 를 사용해서 일어난 문제
// TODO: primitive VS non-primitive 더 알아보기
- non-primitive type 은 객체이며 타입스크립트에서 value(값) 을 작성할 때 사용해서는 안됌
    - primitive type: number, string, boolean
    - non-primitive type: Number, String, Boolean, Object ...
```
💡Solution
```tsx
export interface Post{
  likes: number // Number → number 로 코드수정
}
```