# 🗂 folder structure

### .idea
- IntelliJ의 IDE 옵션(프로젝트별 설정값)을 저장하는 폴더로 IntelliJ에 의해 자동으로 생성됨
- 각 옵션은 작업자의 컴퓨터 환경에 맞춰서 변경되므로 다른 작업자가 소스를 받을때 영향을 주지 않기 위해 .gitignore 에 추가
```text
.idea 폴더가 다른 위치에서도 자동생성되는 현상 발생 
️→ 최초 프로젝트 생성 이후, 폴더 구조를 변경하면서 생긴 현상으로 보여짐
```
---
### node_module
- CRA를 구성하는 모든 패키지 소스 코드가 존재하는 폴더
- 용량이 커 복사해서 사용하는것이 비효율적이기 때문에 깃과 같은 저장소에 올리지 않음(.gitignore 에 추가)
---
### public
- react 프로젝트의 static 파일 즉, 컴파일이 필요없는 파일들이 위치하는 폴더
- index.html, logo.png 등...
```text
- index.html: 개발한 React 프로젝트를 브라우저에 나타내기 위한 파일, 가상 DOM 을 위한 html 파일(빈 껍데기 파일)
- manifest.json: PWA에 필수적으로 포함되어야 하는파일
* PWA(Progressive Web Apps): 웹과 네이티브 앱이 가진 단점을 개선하는 새로운 형태의 웹앱
    - short_name: 사용자 홈 화면에서 아이콘 이름으로 사용
    - name: 웹앱 설치 배너에 사용
    - icons: 홈 화면에 추가할 때 사용하는 이미지
    - start_url: 웹앱 실행시 시작되는 URL 주소
    - display: 디스플레이 유형(fullscreen, standalone, browser)
    - theme_color: 상단 툴바의 색상
    - background_color: 스플래시 화면 배경 색상
    - orientation: 특정 방향(landscape, protrait) 강제로 지정
- robots.txt: 웹사이트에 웹 크롤러 같은 로봇들의 접근을 제어하기 위한 규칙
```
---
### src
- 실질적 코드를 작성하는 파일
```text
- App.css: App.tsx 안의 컴포넌트들에 대한 CSS 파일
- App.tsx: CRA가 제공해주는 기본적인 예제가 들어있는 파일, 초기 컴포넌트
           React Router 를 설치하면 컴포넌트가 최상위 컴포넌트로 App.tsx 컴포넌트 자리에 위치
- index.css: index.tsx 안의 컴포넌트들에 대한 CSS 파일
- index.tsx: App.tsx 안의 App 컴포넌트와 public/index.html을 연결해주는 역할을 하는 파일
- logo.svg: 기본적인 예제에서 사용되는 React 로고
- react-app-env.d.ts: create-react-app 으로 시작된 프로젝트와 관련된 typescript 타입선언을 참조
                      그리고 이러한 타입 선언은 bmp, gif, jpg, png, webp 및 svg와 같은 리소스 파일 가져오는데 지원추가
- reportWebVitals.ts: React 프로젝트의 성능을 측정하기 위한 파일
- setupTests.ts: React 프로젝트에서 테스트를 실행하기 위한 설정 파일
```
---
### package.json 
- CRA 기본 패키지 외 추가로 설치된 라이브러리/패키지 정보(종류,버전)가 기록되는 파일
- 불필요한 용량 차지로 node_modules 을 git 으로 공유하지 않고, package.json 파일로 패키지들을 자동으로 설치
```shell
$ npm install
```
```text
- dependencies
    - React를 사용하기 위한 모든 패키지 리스트, 버전이 확인 가능
    - 실제 코드는 node_modules 폴더에 존재
- scripts
    - start: 프로젝트 개발 모드 실행을 위한 명령어
    - build: 프로젝트 배포 모드 실행을 위한 명령어. 서비스 상용화.
```
---
### package-lock.json
- 해당 프로젝트에 설치한 패키지와 그 패키지, 패키지와 관련된 모든 패키지의 버전정보를 포함
- 개발자가 관리할 필요 없이 npm or yarn이 알아서 패키지 버전들을 자동으로 관리
- 업데이트된 패키지에서 에러가 발생하는 경우가 있어 안전성을 위해 package-lock.json 을 깃에 올림
---
### .gitignore
- 깃저장소에 저장되지 않길 원하는 파일을 지정할 수 있는 파일
---
### tsconfig.json
- 타입스크립트 프로젝트를 컴파일하는데 필요한 루트파일과 컴파일러 옵션을 지정
```text
- compilerOption: typescript 컴파일러의 옵션들을 짖정하는 속성
- files: 컴파일할 파일들의 개별 목록을 지정하는 속성
- includes: 컴파일할 파일들을 지정하는 속성(와일드 카드 패턴으로 묶어 표현)
- exclude: 컴파일 대상에서 제외할 파일들을 지정하는 속성
- extends: 다른 tsconfig.json 파일을 상속받아서 설정을 재사용할 수 있게 해주는 속성
- references: 여러개의 하위 프로젝트로 구성된 프로젝트의 의존 관계를 지정하는 속성
- typeAcquisition: 타입습득과 관련된 옵션들을 지정하는 속성
- watchOptions: watch 모드와 관련된 옵션들을 지정하는 속ㅇ
...
* tsconfig.json에 주석으로 설명 추가되어있음
```
---
### README.md
- 깃에 markdown 문법을 이용하여 프로젝트에 대한 설명을 남길 수 있음
- 해당 저장소에 진입하면 가장 먼저 띄어짐
---

[참고자료] 
- [React 파일 구조](https://velog.io/@ordidxzero/cra-project-structure)
- [React 파일 구조](https://velog.io/@_seeul/React-%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EC%A7%84%ED%96%89%ED%95%A0%EB%95%8C-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EC%9E%A1%EB%8A%94%EA%B2%83%EC%9D%B4-%EC%A2%8B%EC%9D%84%EA%B9%8C)
- [tsconfig.json 상세 설명](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC#tsconfig_%EC%83%9D%EC%84%B1)