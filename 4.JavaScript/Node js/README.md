■ node.js

서버 쪽을 다루는 javascript
web browser를 다루는 javascript와
server를 다루는 javascript는 모듈이 다르다.

~쉬어가는 타임: node.js 의 탄생일기~

javascript 는 web browser 에서만 적용가능했었다.
하지만 구글이 javascript 엔진인 V8 엔진을 개발하고
오픈 소스로 V8을 공개했다.
node.js는 V8의 특징인 event-driven과 non-blocking I/O를
그대로 갖는다.
event-driven: 이벤트 기반
asynchronous: 비동기, 결과가 나올 때까지 기다리지 않고
계속 진행한다.
node.js의 패키지가 모여있는 허브로써 npm이 있다.

■ cmd 창에서 js 파일 실행하는 방법

js 파일이 있는 폴더로 이동한 다음
node (파일이름).js 입력

■ npm

다른 사람이 만든 패키지를 간편하게 설치하여 사용
앱스토어에서 어플을 간단히 다운받는 것과 비슷

ex) cmd 창에서 underscore 패키지 설치

패키지를 설치받고 싶은 디렉토리로 이동
npm init 입력
//내 디렉토리를 패키지화
npm install underscore 입력
// --save 가 디폴트, package.json 에 dependency 저장
// --no-save 는 입력해야 적용됨
// --save-dev 는 package.json 에 dev-dependency로 저장
// -g 는 global(전체 시스템이 이용할 수 있는 디렉토리) 로 설치
// -g 를 안 붙이면 local(node_modules)에 설치