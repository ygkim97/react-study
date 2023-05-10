# 📕 tsx

### ️✅ JS와 JSX
- JS와 JSX는 React 프로젝트에서 사용되는 두 가지 파일 형식
- JS 파일은 React에서 UI를 구현하는 데 사용 될 수 있지만, JSX를 사용하는 것이 일반적

#### JS(javascript)
```text
- 일반적인 javascript 코드를 포함
- 함수, 변수, 제어문 및 객체와 같은 javascript의 모든 구성 요소를 사용하여 구성된 파일
```
#### JSX(javascript + xml)
```text
- HTML과 javascript를 혼합한 문서
- javascript 코드를 포함하지만, HTML 요소와 유사한 구문을 사용해 React에서 UI를 더 쉽게 작성할 수 있도록 도와준다.
```

### ️✅ TS와 TSX

#### TS(typescript)
```text
- javascript 기반으로하여, 정적 타입 검사를 지원하는 javascript의 슈퍼셋
- 따라서 javascript 코드에서 타입 검사와 컴파일 타임 오류 검사를 수행하는데 사용
```
#### TSX(typescript + JSX)
```text
- React에서 UI를 작성하는 데 사용되는 typescript
- 따라서 React에서 UI를 작성할 때 typescript를 사용하여 타입 검사를 수행하는데 사용
```

### ️✅ TSX 기초 문법
#### class
```tsx
// class가 아닌 className으로 지정
<div className="클래스이름"></div>
```

#### style
```tsx
// 속성값은 camelCase 작명관습에 따라 속성명 변경해서 사용 ex) font_size X → fontSize
<div style={{속성명: '속성값'}}></div>
```
#### 데이터바인딩
```tsx
// 중괄호 안에 데이터 설정
function Test(){
  let data = '테스트 데이터'
  
  return (
    <div>{data}</div>
  )
}
```

#### state
- 리액트의 데이터 저장공간
- web이 app처럼 동작하게 도와줌 → 데이터 변동사항이 생기면 자동으로 html 재렌더링해주기 때문
- 자주 바뀌는 중요한 데이터는 변수가 아닌 state 사용
```tsx
import {useState} from 'react';

function Test(){
  // data: 데이터
  // setDataFn: 데이터 변경 도와주는 함수
  let [data, setDataFn] = useState(['a','b','c']);
  let [num, setNum] = useState(0);
  
  return (
    <div>
      <div>data</div> {/* output: abc */}
      <div>data.at(0)</div> {/* output: a */}
      <div onClick={()=> {
        {/*
         state값 변경시, 기존 state == 신규 state 이면 변경X
         Array,Object 인 경우, 주소값을 저장하기 때문에 변경해도 같다고 감지해
         독립적인 copyData를 만들어 사용해야함.
         */}
        let copy = [...data];
        copy[0] = 'A';
        setDataFn(copy);
      }}>버튼1</div>
      
      <div onClick={()=>{setNum(num+1)}}>버튼2</div> {/* state 변경시, 무조건 state변경함수 사용 */}
    </div>
  )
}
```
