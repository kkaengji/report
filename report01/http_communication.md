# HTTP 통신?
**HTTP (HyperText Transfer Protocol)**는 현재 월드 와이드 웹(World Wide Web)에서 데이터를 교환하는 데 사용되는 가장 기본적인 프로토콜입니다. 클라이언트(웹 브라우저 등)와 서버 간의 통신을 가능하게 하며, 웹 리소스(HTML 문서, 이미지, 비디오 등)를 전송하는 핵심 역할을 담당합니다. 

## 2. HTTP 통신의 기본 원리
HTTP는 **클라이언트-서버 모델(Client-Server Model)**을 따르며, **요청(Request)**과 **응답(Response)**의 구조로 작동합니다.
### 2.1. 요청 (Request)
클라이언트(예: 웹 브라우저)가 서버에게 특정 작업을 요청하기 위해 전송하는 메시지입니다.
- 시작 줄 (Start Line): 요청 메서드(GET, POST 등), 요청 대상 URL, HTTP 버전을 포함합니다. (예: GET /index.html HTTP/1.1)
- 헤더 (Headers): 요청에 대한 메타데이터를 포함합니다. (예: Host, User-Agent, Accept-Language 등)
- 공백 줄 (Empty Line): 헤더의 끝을 알립니다.
- 본문 (Body): 요청에 포함될 실제 데이터입니다. (주로 POST, PUT과 같은 메서드에서 사용됩니다.)

### 2.2. 응답 (Response)
서버가 클라이언트의 요청을 처리한 후 그 결과를 알려주기 위해 전송하는 메시지입니다.
- 상태 줄 (Status Line): HTTP 버전, 상태 코드(Status Code), 상태 메시지를 포함합니다. (예: HTTP/1.1 200 OK)
- 헤더 (Headers): 응답에 대한 메타데이터를 포함합니다. (예: Content-Type, Date, Server 등)
- 공백 줄 (Empty Line): 헤더의 끝을 알립니다.
- 본문 (Body): 요청된 리소스의 실제 내용(HTML, JSON, 이미지 등)이 포함됩니다.

## 3. HTTP의 핵심 특징
### 3.1. 무상태성 (Stateless)
HTTP는 기본적으로 무상태(Stateless) 프로토콜입니다.
- 의미: 서버가 클라이언트의 이전 요청과 현재 요청 사이에 어떤 상태 정보(예: 로그인 여부, 장바구니 내용)도 보존하지 않습니다. 모든 요청은 독립적으로 처리됩니다.
- 장점: 서버의 부하를 줄이고, 서버 확장에 유리합니다 (Scale-out 용이).
- 단점 및 해결책: 실제 서비스에서는 상태 유지가 필수적이므로, 쿠키(Cookie), 세션(Session), 토큰(Token - JWT 등) 같은 기술을 사용하여 상태를 관리합니다.

### 3.2. 비연결성 (Connectionless)
- 의미: 클라이언트가 요청을 보내고 서버가 응답을 보내면, 연결(Connection)을 즉시 끊는 것이 기본 원칙입니다.
- 장점: 서버는 연결 유지에 필요한 리소스를 절약할 수 있습니다.
- 단점 및 해결책: 요청마다 연결을 맺고 끊는 오버헤드가 발생합니다. HTTP/1.1부터는 지속 연결(Persistent Connection, Keep-Alive) 기능이 도입되어 일정 시간 동안 연결을 유지함으로써 오버헤드를 줄였습니다.

## 4. HTTP 버전별 특징
- HTTP/1.0: 요청/응답마다 TCP 연결을 새로 맺습니다. (비연결성)
- HTTP/1.1: 지속 연결(Persistent Connection) 도입, **파이프라이닝(Pipelining)**을 통해 연결 효율 개선, Host 헤더 필수화.
- HTTP/2: 이진 프레이밍 (Binary Framing) 사용, 다중화 (Multiplexing) 지원으로 하나의 연결에서 여러 요청/응답 동시 처리, 헤더 압축 및 서버 푸시 (Server Push) 기능 도입. 성능이 획기적으로 개선되었습니다.
- HTTP/3: TCP 대신 QUIC 프로토콜 사용. HOL Blocking (Head-of-Line Blocking) 문제 해결, 연결 설정 지연(Latency) 감소, 연결 마이그레이션 지원.

# 결론
HTTP는 웹의 근간을 이루는 프로토콜로서, 요청-응답 기반의 단순하면서도 강력한 구조를 통해 전 세계적인 정보 교환을 가능하게 했습니다. 개발자로서 HTTP의 무상태성, 비연결성 같은 특징과 각 메서드의 정확한 용도를 이해하는 것은 효율적인 RESTful API 설계 및 웹 애플리케이션 개발에 필수적입니다. HTTP/2와 HTTP/3의 등장으로 성능과 보안이 지속적으로 개선되고 있는 만큼, 최신 표준에 대한 이해는 풀스택 개발자에게 중요한 역량입니다.
