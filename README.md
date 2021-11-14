# THE V PLANET ASSIGNMENT

## SUMMARY

<br/>

### 키워드를 검색하면 그 키워드와 관련된 트윗들을 가져옵니다.

<br/>

<p align="center">
    <a href='https://youtu.be/JbMdnii8pOE=0s'>
       <img src='http://img.youtube.com/vi/JbMdnii8pOE/0.jpg' alt='youtube-thumbnails'>
        <br/>
        <br/>
        데모 영상 링크
    </a>
<p/>

<br/>


## TECH STACK

### CLIENT

    REACT, REDUX, REDUX-SAGA, SOCKET.IO-CLIENT, STYLE-COMPONENTS

### SERVER

    EXPRESS, SOCKET.IO, NEEDLE

<br/>

## FEATURE

<br/>

1. 검색

- 키워드를 검색하면 서버에서 트위터 스트림에 연결하여 10개의 트윗을 불러오고 트위터 스트림과의 연결을 종료하는 명령 전달

<br/>

2. 무한 스크롤

- IntersectionObserver 을 통하여 구현, 서버에서 트위터 스트림과의 연결이 종료되어 있을 때만 추가로 트윗을 불러오는 명령 전달

<br/>

3. 타임아웃 기능

- 서버에서 일정 시간 동안 응답이 없을 시, 검색 결과가 없다는 모달을 띄우고 클라이언트에서 서버로 스트림을 종료하는 명령 전달

<br/>

4. 반응형 디자인

- 브라우저 창이 트윗의 가로 폭보다 넓은 지 좁은지를 기준으로 작동

<br/>

5. 트윗 리다이렉트

- 특정 트윗 클릭시, 트위터의 그 해당 트윗에 해당되는 주소로 이동

<br/>

## INSTALLATION

1. ENV 파일 설정

   ### CLIENT

   ```
    REACT_APP_STREAM_SERVER_URL=http://localhost:5000
   ```

   ### SERVER

   ```
    TWITTER_BEARER_TOKEN=트위터 개발자 등록 후 받을 수 있는 Bear 토큰
    CLIENT_URL=http://localhost:3000
   ```

2. 실행

   ### CLIENT & SERVER 공통

   `npm start` 를 통하여 시작

   <br/>

## USAGE

1. 키워드 입력 후, Enter 키를 눌러 검색

<br/>

## COMMENT

### CLIENT

1. 최근 유튜브에서 RIDI의 REACT NATIVE 앱 구조에 관한 영상을 보고, 영감을 받아서 이런 형태의 폴더 구조를 만들어보았습니다.
2. 조금이라도 상태관리가 필요해보이는 프로젝트면 상태관리 도입하는 것을 선호하며, REDUX 와 RTK를 함께 사용하는 것을 선호하는 편이기에 REDUX와 RTK 를 통해서 상태관리를 해주었습니다.
3. 최근에 REDUX-SAGA와 SOCKET을 같이 사용한 프로젝트가 있었는데, 그 당시 SOCKET과의 통신 로직을 구상하고 코드를 가독성이 좋게 작성하는 것이 편했던 경험이 있기에 이번 프로젝트에서 사용하게 되었습니다.

### SERVER

1. 트위터 API가 CORS를 지원하지 않았기에, 트위터 API를 처리해주는 서버를 만들어 사용하는 방법밖에 없다고 판단이 되어 서버를 추가로 만들게 되었습니다.
2. 서버가 여러 명이 사용하는 상황에 대해서는 대응이 되어있지 않습니다.
