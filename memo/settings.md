# ⚙️ settings

### ️✅ ESLint & Prettier 설치
#### ESLint (ES(javascript) + Lint(오류검사기))
- javascript 코드를 실행하지 않고도 에러가 있는 코드를 발견해 표시해주는 Node.js 패키지
#### Prettier
- 개발자가 작성한 코드를 미리 정해준 스타일 규칙에 맞게 변환해주는 Formatter

#### 설치방법
1. npm 으로 ESlint 와 Prettier 설치 / Prettier와 ESLint 충돌 방지하기 위한 패키지도 추가로 설치
- eslint-plugin-prettier - prettier에서 인식하는 오류를 ESLint가 출력
- eslint-config-prettier - prettier와 eslint의 충돌을 일으키는 ESLint 규칙들을 비활성시켜주는 config
```shell
$ npm i eslint prettier eslint-plugin-prettier eslint-config-prettier
```
아래 패키지들은 CRA(create-react-add) 프로젝트에서는 지원해주므로 제외
- eslint-plugin-react - React 관련 린트설정 지원
- eslint-plugin-react-hooks : React Hooks의 규칙을 강제해주는 플러그인
- eslint-plugin-jsx-a11y : JSX 내의 접근성 문제에 대해 즉각적인 AST  린팅 피드백 제공

2. .eslintrc.json, .prettierrc.json 파일 root 경로에 추가
- .eslintrc.json
```json5
{
  "env": {}, //사용 환경 의미
  "extends": [], // 확장 기능 사용
  "parserOptions": {}, // 버전가 모듈 사용 여부
  "plugins": [], // 사용되는 플러그인
  "rules": {} // 세부 설정(규칙) 추가
}
```
- .prettierrc.json
```json5
{
  "printWidth": 80, //  화면 폭
  "tabWidth": 2, // 탭 간격, 스페이스 설정 시 2칸 띄어쓰기
  "useTabs": false, // 탭키 사용, false 추천 -> space 대체
  "semi": true, // 세미콜론 사용 여부
  "singleQuote": false, // 작은 따옴표 사용
  "quoteProps": "as-needed", // 객체 속성에 쿼테이션 적용방식
  "trailingComma": "none", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  "bracketSpacing": true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  "jsxBracketSameLine": false, // jsx 요소 '>' 를 다음 줄로 내릴지 여부
  "arrowParens": "always", // 화살표 함수 괄호 사용방식, (x) => x 일때 괄호유지
  "proseWrap": "preserve", // markdown 텍스트의 줄바꿈 방식
  "htmlWhitespaceSensitivity": "css", // HTML 공백 감도 설정
  "endOfLine": "lf", // EoF 방식
  // ...
}
```

3. 환경설정에서 ESLint와 Prettier 설정
- Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint
  - Automatic ESLint configuration - ESLint 를 적용하기 위해 체크
  - Run eslint --fix on save - --fix옵션을 사용해 수정 가능한 코드를 자동으로 수정함
- Preferences > Languages & Frameworks > JavaScript > Prettier
  - prettier package로 설치한 prettier 라이브러리 선택
  - On save - 파일을 저장할때 자동으로 코드 스타일을 수정
#### Error
❗️ESLint Error - TypeError: this.libOptions.parse is not a function</br>
💡Solution - ESLint를 8.22.x 이하 로 다운그레이드
```shell
#echo ESLint 버전을 8.22.0 으로 고정
$ npm install eslint@8.22.0 --save-exact

#echo 모듈 삭제 후 재 로드
$ rm -rf node_modules
$ rm package-lock.json
$ npm i
```