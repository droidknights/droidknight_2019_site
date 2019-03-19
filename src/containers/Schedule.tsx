import * as React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Store from "src/store";

const Wrapper = styled(Element)`
  padding: 101px 14.4% 137px 14.4%;
  background-color: #0f1723;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div.title {
    font-size: 38px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.4px;
    text-align: center;
    color: #ffffff;
  }

  & > div.desc {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

    margin-top: 18px;
  }

  & > div.desc2 {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.53;
    letter-spacing: normal;
    text-align: center;
    color: #9b9b9b;
  }

  @media only screen and (max-device-width: 480px) {
    padding: 69px 8% 60px 8%;
    & > div.desc,
    & > div.desc2 {
      font-size: 13px;
    }
  }
`;

const ScheduleContent = styled.div`
  margin-top: 43px;
  width: 100%;

  & > span {
    font-size: 51px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.75;
    text-align: center;
    color: #003e61;

    margin: 40px 0;
  }

  @media only screen and (max-device-width: 480px) {
    & > span {
      font-size: 41px;
    }
  }
`;

const TrackTable = styled.div`
  width: 100%;
  border-bottom: 2px solid #4c4c4c;
  margin-bottom: 15px;
`;

const TrackTableHeader = styled.div`
  padding-left: 110px;
  padding-bottom: 16px;
  padding-top: 16px;
  display: flex;
  & > div {
    flex: 1;
    & > img {
      width: 100px;
    }
  }
`;

const TrackTableHeaderMobile = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 19px;
  margin-top: 45px;
  & > img {
    width: 100px;
    height: 33.8px;
  }
`;

const TrackTableColumn = styled.div`
  display: flex;

  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  padding: 11px 6px;

  border-top: 2px solid #4c4c4c;

  & > div {
    padding-right: 25px;
    & > p:nth-child(1) {
      margin-top: 0;
      margin-bottom: 10px;
    }

    & > p:nth-child(2) {
      margin: 0;
    }
  }

  & > div:nth-child(1) {
    word-wrap: break-word;
    width: 110px;
    color: #9b9b9b;
  }
  & > div:nth-child(2) {
    flex: 3;
    color: white;

    & > p:nth-child(1) {
      color: #45fc17;
    }
  }

  & > div:nth-child(3) {
    flex: 3;
    color: white;

    & > p:nth-child(1) {
      color: #00f0e4;
    }
  }
  & > div:nth-child(4) {
    flex: 3;
    color: white;

    & > p:nth-child(1) {
      color: #ffd26e;
    }
  }

  & > div > p {
    display: flex;

    & > span {
      display: flex;
      align-items: center;
      color: #b9b9b9;
      opacity: 0.4;
      cursor: pointer;
      & > img {
        width: 15px;
        height: 15px;
        margin-left: 10px;
        margin-right: 3px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const TrackTableColumnBlock = styled.div`
  height: 55px;
  color: #d8d8d8;
  display: flex;
  background-color: #303741;
  border-bottom: solid 2px #4c4c4c;
  padding: 11px 6px;
  font-size: 15px;

  & > div:nth-child(1) {
    width: 110px;
    word-wrap: break-word;
    padding-right: 25px;
  }

  & > div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    & > p {
      margin: 0;
    }
  }

  @media only screen and (max-device-width: 769px) {
    & > div:nth-child(1) {
      width: 70px;
    }
  }
`;

const ProgramContent = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 30%;
    margin-bottom: 34px;
  }

  @media only screen and (max-device-width: 480px) {
    & > img {
      width: 60%;
    }
  }
`;

const ProgramItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-device-width: 480px) {
    display: block;
  }
`;

const ProgramItem = styled.div`
  width: 32%;
  border: solid 1px #003e61;
  padding: 15px 20px;
  & > p:nth-child(1) {
    color: #3dea11;
    margin-top: 0;
  }

  & > p:nth-child(2) {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    color: #ededed;
    margin-bottom: 0;
  }

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    height: 140px;
    margin-bottom: 23px;
  }
`;

const Boarder = styled.div`
  background-color: #003e61;
  width: 100%;
  height: 2px;
  margin-top: 94px;
  margin-bottom: 94px;
`;

export interface ScheduleProps {
  isPhone: boolean;
}

export interface ScheduleState {
  tracks: Array<Array<string | string[]>>;
}
export default class Schedule extends React.Component<
  ScheduleProps,
  ScheduleState
> {
  constructor(props: ScheduleProps) {
    // 이름 제목 발표개요 청중대상 발표자 소
    super(props);
    this.state = {
      tracks: [
        [
          "10:10~10:55",
          [
            "노재춘",
            "RxJava 구독과 구독 제거 메커니즘 설명",
            "RxJava의 구독과 구독 제거 메커니즘을 이해하고 정확하게 이를 적용하는 방법을 얘기합니다.",
            "RxJava를 적용해보신 개발자",
            "네이버에서 안드로이드 앱을 8년간 만들면서 온갖 앱의 문제를 해결하기도 했고 사고도 여러번 내서 욕을 많이 먹기도 했습니다.  안드로이드 프로그래밍 next step을 저술했고 근래에는 밴드 앱을 개발하고 있습니다. 승마왕이라는 필명을 주로 사용합니다."
          ],
          [
            "김성일",
            "안드로이드 TDD 적용기",
            "앱 개발을 하며 느리고 반복적인 디바이스 테스트에 회의를 느끼고, 테스트를 도입하려고 마음먹었습니다. 단위테스트 작성부터 TDD를 적용하는 것을 목표로 많은 시행착오를 겪었으며, 최근 실무 프로젝트의 대부분을 TDD로 개발하였습니다. 이번 프로젝트의 일부를 실례로 제시하며, 안드로이드 앱 개발과정에 TDD를 적용하면서 느끼고 경험했던 것을 공유합니다.",
            "[청중대상]\n* 안드로이드 테스트에 관심이 있는 모든 개발자\n[필수사항]\n* 안드로이드 앱 개발 경험\n[강연에 도움이 되는 사전지식]\n* MVP 아키텍처 패턴\n* Unit Test (Junit4)\n* UI Test (Espresso)",
            "케어랩스에서 ‘굿닥’ 안드로이드 앱 개발을 담당하고 있으며, Kotlin과 Android Architecture, TDD에 관심을 가지며 즐겁게 개발하고 있습니다."
          ],
          [
            "정승욱",
            "동적 맵 프레임워크와 인터렉션 구현하기",
            "안드로이드에서 GoogleMap, MapBox, HereMap, Tmap 등을 앱 재실행 없이 실시간으로 동적으로 지원하기 위해 처리한 방법과 서로 다른 맵 프레임워크에서 동일한 맵 인터렉션을 독립적인 컴포넌트로 구현하는 방법을 공유하고자 합니다.",
            "1. 동적으로 서로 다른 Configuration 처리를 적용하는 방법을 알고 싶은 분들.",
            "2010년부터 안드로이드 개발을 시작하여 현재 GrabTaxi 에서 승객, 기사앱의 Geo 팀 테크 리더로 일하고 있습니다."
          ]
        ],
        [
          "11:10~11:40",
          [
            "하동현",
            "지금까지 이런 간단한 Logic 처리는 없었다. 이것은 Rx인가, UI 이벤트인가?",
            "최근 앱 화면을 보면 한 화면에 다양한 UI 가 존재하며 각 UI에 대하여 복잡한 Logic 이 있습니다. Logic 은 요구 사항에 따라 쉽게 변하거나 복잡해질 수 있으며 복잡한 Logic 을 처리하다 보면 Logic 이 엉키게 되어 유지 보수하기 어렵게 됩니다. 그러나 RxBinding 라이브러리를 이용할 경우 중복 코드 처리 및 UI 이벤트 조합 등 다양한 방법으로 보다 손쉽게 해당 문제점을 해결할 수 있습니다. 이 세션에서는 RxBinding 라이브러리의 기본적인 사용 방법뿐만 아니라 실제 프로덕션에 적용해봤던 경험을 바탕으로 다양한 예시를 들어 설명할 예정입니다.",
            "사전 지식 : RxJava, Kotlin\n청중 대상자\n- 복잡한 View에 대하여 Logic 처리의 어려움을 겪고 있는 분\n- 모든 이벤트 처리를 Rx로 간단하게 해결하고 싶으신 분\n- RxBinding이 실제 프로덕션에서 어떻게 사용되는지에 대해 알고 싶으신 분",
            "3년 차 안드로이드 개발자이며 관심 있는 분야는 RxJava 와 Architecture입니다. 현재 힐링 페이퍼에서 ‘강남 언니’ 안드로이드 앱 개발을 담당하고 있습니다."
          ],
          [
            "장선옥",
            "Android Project with Multi Module",
            "여러 개의 모듈을 사용해서 안드로이드 프로젝트를 개발하고 있는 이유와, 모듈화 된 앱 개발의 장단점, 모듈화 방법, 프로젝트 관리법 등에 대해 소개합니다.",
            "1) 안드로이드 모듈, 라이브러리에 관심이 있으신 분\n2) 안드로이드 모듈을 제작하는 방법에 대해서 궁금하신 분",
            "현재 매스프레소에서 콴다라는 글로벌 교육 앱을 만들고 있는 안드로이드 개발자입니다. 생산성, 효율성에 대해 항상 고민하는 개발자입니다."
          ],
          [
            "Yusuke Konishi (English)",
            "Master of Android Theme",
            "Do you manage Android theme effectively? Do you set the view attributes in each styles or views instead of using Android theme?\nI'll talk about the attributes you can set in Android theme especially Material Components Library.\n\nAndroid 테마를 효과적으로 관리합니까? Android 테마를 사용하는 대신 각 스타일 또는보기에서보기 속성을 설정합니까?\nAndroid 테마, 특히 Material Components Library에서 설정할 수있는 속성에 대해 이야기하겠습니다.",
            "- The people who want to know which parent theme we should implement.\n- The people who want to know how we can change theme and night mode dynamically.\n- The people who want to know what kind of attributes there are in Android Framework, AppCompat, Material Components.\n\n- 우리가 구현해야하는 부모 테마를 알고 싶어하는 사람들.\n- 우리가 테마와 야간 모드를 어떻게 동적으로 바꿀 수 있는지 알고 싶어하는 사람들.\n- Android Framework, AppCompat, Material Components에 어떤 종류의 속성이 있는지 알고 싶어하는 사람들.",
            "I'm Japanese Android Engineer. I work for Kyash which is Japanese FIntech company.\nhttps://github.com/konifar"
          ]
        ],
        [
          "11:55~12:40",
          [
            "남상균",
            "코틀린 디자인 패턴",
            "코틀린은 언어 자체에서 디자인 패턴을 보다 효과적으로 반영할 수 있도록 설계되어 있습니다. 이번 발표에서는 전통적인 GoF의 23가지 디자인 패턴이 코틀린에서 어떻게 적용될 수 있는지 살펴보고, 더 효율적인 코드를 작성하는 방법에 대해 이야기하려 합니다. 특히 각 패턴들이 자바로는 어떻게 구현되었는지 비교해 보며 코틀린 언어에 대한 이해도를 높이는 계기가 되었으면 합니다.",
            "코틀린에 대한 기본 지식이 필요합니다. 코틀린 언어에는 이제 익숙해졌지만 보다 효율적인 코드를 작성하기 위해 고민하는 분들이면 모두 좋을 것 같습니다.",
            "NBT에서 기술이사로 광고 및 콘텐츠 시스템 개발을 책임지고 있습니다. 모바일 초기부터 다양한 플랫폼 개발을 경험해 왔으며, 현재는 백엔드에서 모바일 서비스를 보다 효율적으로 지원하는 방법들을 고민하고 있습니다. 직접 코드를 다루는 것도 좋아하지만, 가치있는 서비스를 만들며 함께 성장하는 것을 가장 중요하게 생각합니다. 최근에는 애자일 개발 문화에도 관심을 가지고 이를 반영하는 조직을 만들기 위해 노력 중 입니다."
          ],
          [
            "황성현",
            "Clean Architecture (in Android) Revised",
            "2017년 드로이드 나이츠에서 진행했던 [Clean Architecture in Android] 발표에서 지금과 생각이 달라진 내용, 뉘앙스로 인해 오해를 낳았던 내용 등을 바로잡는 세션을 생각 중입니다. \n\n1) Clean Architecture의 radical한 정의 및 요소\n2) 2017년 본인의 발표 및 기존 clean architecture 관련 자료들 검토 및 의견 전달\n3) 위 피드백을 바탕으로 제안하는 clean architecture의 구현체 형태 제안",
            "1) Clean Architecture에 대한 기초적인 이해 \n2) MVP/MVVM 등 패턴 또는 안드로이드 아키텍처에 관심이 있으신 분",
            "뱅크샐러드를 만드는 레이니스트의 CTO를 맡고 있고, 약 2년간 뱅크샐러드 Android 앱 개발을 담당했습니다."
          ],
          [
            "노현석",
            "MotionLayout 무릎까지 담궈보기",
            "Google I/O '18에서 소개된 MotionLayout에 대해서 알아봅니다. MotionLayout의 소개, 컴포넌트 정의를 소개하며 샘플 예제를 통해 어떻게 모션 레이아웃을 적용할지 소개할 예정입니다.",
            "ConstraintLayout을 좋아하시는 분들. MotionLayout & Animation에 대한 욕심이 있는 분들.",
            "Android 개발 9년차의 개발자입니다. 현재 Naver Clova에서 Android 앱 개발을 담당하고 있습니다. 설계와 레이아웃, UI에 대해 관심이 많은 개발자입니다."
          ]
        ],
        [
          "12:55~13:25",
          [
            "박상권",
            "Kotlin 꼭 해야하나요?",
            "- Kotlin이 공식언어로 지정된지 2년이 됐음에도 요즘 각종 안드로이드 커뮤니티에서 제일 많이 나오는 질문은 'Kotlin 꼭 해야하나요?' 입니다.\n- Java코드를 Kotlin코드로 코딩하기 시작하면서 느꼈던 Java코드와 Kotlin을 비교했을때의 특징과 장점들에 대해서 이야기 합니다.\n- Kotlin을 학습하려고 하는 분들을 위한 각종 팁들과 삽질경험들을 공유합니다.",
            "Kotlin 학습을 고려중인 안드로이드 개발자",
            "현) PRND컴퍼니(헤이딜러) 안드로이드 개발팀장\n- 안드로이드 개발 9년차\n- 대기업, 증권회사, 스타트업 근무 경험\n- 중고폰 관련 서비스 '셀폰' 창업 경험\n- 개발자대회 및 창업대회 다수 수상\n- '박상권의 삽질블로그' 운영\n- 30개이상의 개인앱 출시 및 운영\n- 각종 개발자 행사 주최 및 발표 경험"
          ],
          [
            "김현",
            "모바일에서 오프라인 모드 적용 사례",
            "1. 일반적인 앱 개발 방법 : 보통 REST API 를 통한 데이터 취득 및 화면 갱신을 기반으로 앱을 개발하고 있음\n2. 오프라인 모드가 필요한 이유 : 네트워크 통신 실패 시에 대한 처리, 응답 성능의 향상등의 요구가 발생하게 됨\n3. 현재 적용된 앱들의 사례 : 여러 회사에서 적용한 오프라인 스토리지를 이용한 대응 사례들 공유\n4. 나의 적용 사례 공유 :  로컬 스토리지를 이용한 오프라인 모드를 구축하고 적용하기로 함./ 로컬 스토리지를 참조한 화면 갱신으로 반응성 향상 및 서버와의 통신을 통해 Sync를 정책에 따라 실행함으로써 신뢰성 확보 샘플 코드 공유 및 구조 설명  (클린 아키텍쳐의 일부로 적용함 )\n5. Q&A",
            "1. 네트워크 환경이 안좋은 상황에서도 모바일 앱의 기능을 구현해야 하는 분들\n2. 좀 더 빠른 반응성을 필요로 하는 앱을 개발중인 분들\n3. 이미 오프라인 모드를 구현하고 있고 다른 사례를 알고 싶은 분들\n4. 간략한 클린 아키텍쳐 적용사례를 알고 싶은 분들",
            "2012년에 앱개발로 시작해서 안드로이드를 메인으로 간간히 크로스플랫폼으로 모바일 양쪽 개발을 다 하기도 하고 있습니다.  팬택 -> 직방 을 거쳐서 지금은 일본 Fast Retailing(유니클로) 에서 앱개발자로 근무중입니다."
          ],
          [
            "장인수",
            "Flutter Native Module Bady Step",
            "Flutter의 전반적인 설명 후 Flutter 와 Native Module 간의 통신 개발하는 방법을 Baby Step 으로 소개 하고자 합니다.",
            "Flutter 관심자, Cross-Platform 관심자,  Android 개발자",
            "팬택 시리우스 안드로이드 폰 개발로 처음으로  Android 개발에 입문 하였으며, 다수의 삼성 갤럭시폰 모델 개발 후 캐나다에서 SNS 플랫폼 개발을 하였고,  한국으로 귀국 후 ZUMO 서비스 개발,  카쉐어링 모바일 서비스를 개발 후 현재는 우아한형제들에서 배민마켓 모바일서비스를 개발하고 있습니다. "
          ]
        ],
        ["13:25~15:00", "점심시간"],
        [
          "15:00~15:45",
          [
            "정동진",
            "코루틴 너 은행에서 뭐하니?",
            "1. 코루틴에 대한 간략한 설명\n  a. 어느곳에서 사용할수 있는가?\n  b. 어떤 강점을 가지고 있는가?\n2. 샘플 학습과 안드로이드 적용\n  a. 샘플 코드와 학습에 대한 노하우\n  b. 샘플 코드와 안드로이드 적용시의 차이점\n3. 실무코드에 적용 및 문제점 및 적용법\n4. 적용된 소스코드 설명\n5. 최적화된 코드 인가?에 대한 고민",
            "예재 코드를 돌려보고 코루틴을 적용하시고 싶으신 분 실무에서 사용한 코루틴 코드를 보고 싶으신 분",
            "임베디드, MFC, ActiveX 거처 2009년 안드로이드를 개발 했습니다. 2011년 부터 은행권 개발을 시작해서 현재 하나은행에서 안드로이드 개발자로 일하고 있습니다."
          ],
          [
            "강사룡",
            "안드로이드 아키텍처 총정리",
            "당신의 아키텍처, 뭔가 잘못된 것 같은 느낌에 시달리고 있지는 않나요? MVP부터 MVVM, Flux 그리고 클린 아키텍처까지 best practice를 중심으로 현업에서 어떤 아키텍처를 적용할 것인가에 대해, 그리고 아키텍처 관점에서 의존성 주입, Rx, 코루틴, 멀티 모듈 등등의 기술을 어떻게 적용할 수 있을지, 2018년에 이어 더욱 깊은 내용으로 다뤄봅니다.",
            "누구에게 보여줘도 부끄럽지 않을 코드를 만들고 싶은 모든 안드로이드 개발자",
            "경력 19년차 개발자. 넥슨 등에서 근무 후, 미국 창업 도중 모바일 개발을 접한 후, 이후 다양한 설계방식을 시도해 옴. 현재는 IBM iX Japan에서 다양한 고객의 모바일 개발을 돕고 있음"
          ],
          [
            "양찬석",
            "구글 플레이의 다이나믹 딜리버리 (APK는 이제 안녕)",
            "1. 왜 다이나믹 딜리버리가 필요할까?\n2. 구글에 앱 사인 키를 알려주세요.  \n3. 앱 번들 기능 소개 및 적용법\n4. 앱 번들 효과적으로 테스팅 하기\n5. 앱 번들 이 후 - 다이나믹 피쳐 모듈 소개\n6. 다이나믹 피쳐 모듈을 어떻게 활용할 수 있을까? (구현 및 UX)\n7. 좀 더 더 다이나믹하게 - 인스턴트 앱 기능 소개\n8. 인스턴트 앱 - Can / Can't do\n9. 앞으로 앱은 어떻게 배포되고 개발될까?",
            "구글 플레이의 앱 번들(App Bundle), 다이나믹 피쳐 모듈(Dynamic Feature Module), 인스턴트 앱(Instant App)등 새로운 배포 방법에 관해 관심 있는 분들. \n다운로드되는 APK 크기를 줄이는데 관심있는 분들.\n인스턴트 앱 기능 구현에 관심이 있는 분들.",
            "구글 코리아에서 Developer Advocate로 안드로이드 및 기타 구글의 다양한 기술을 다른 개발자 및 회사에 소개하는 역할을 합니다. \n2009년 안드로이드 1.5버전 출시 후 2015년까지는 안드로이드 앱 개발자로 활동했습니다.  그 이후 현재까지는 다른 개발자 교육 및 파트너 문제 해결을 위해 안드로이드에서 새롭게 추가되는 기능 중심으로 살펴보고 있습니다."
          ]
        ],
        [
          "16:00~16:30",
          [
            "권태환",
            "코루틴 안전! 이쁘게 코루틴 사용하는 방법은?",
            "코루틴은 어렵지 않게 적용할 수 있다. 그러면 코루틴 내에서 발생하는 오류를 어떻게 캐치하고 안전하게 사용할 수 있을까? 코루틴 내에서 발생하는 오류를 안전하게 처리하는 방법을 소개하고, 코루틴으로 라이브러리 형태로 접근 하는 방법을 소개하려고 한다.\n - 코루틴 소개\n - 코루틴 사용 중 발생하는 오류 처리 방법을 알아본다\n - 코루틴 라이브러리를 직접 만들고 활용해보는 방법을 알아본다\n - 실제 적용 사례를 함께 소개한다",
            "코틀린 코드 활용에 문제가 없다.\nkotlin coroutines에 관심이 있다.",
            "7년차 안드로이드 개발자로 GDG Seoul 운영진, 드로이드나이츠 운영진이며, 3년 전부터 코틀린 학습 및 실 프로젝트에 적용하여 사용중입니다. 꿈 많은 개발자가 되자! 블로그를 통해 안드로이드 개발에 관련한 다양한 글을 비주기로 업로드하고 있으며, 현재는 카카오페이에서 안드로이드 개발을 하고 있습니다."
          ],
          [
            "박민석, 유진의",
            "PWA 품은 안드로이드 웹뷰 경험기",
            "웹뷰를 포함한 앱이 어떻게 하면 사용자에게 더 빠른 속도로 좋은 경험을 전달할 수 있을까요? PWA와 함께 기존 웹뷰의 한계를 극복하고 사용자 경험을 한층 더 발전시킨 경험을 공유합니다.",
            "1) 웹뷰를 이용한 하이브리드 앱을 만드시는 분들\n2) 웹뷰를 포함한 앱의 성능향상을 위해 불철주야 고민하시는 분들\n3) 오프라인에도 돌아가는 앱에 대해 고민하시는 분들",
            "박민석 - 휴마트컴퍼니에서 '트로스트' 서비스의 안드로이드 클라이언트를 개발하고 있습니다.\n유진의 - 안녕하세요. 진의입니다. 세상 모든 사람들과 친구가 되겠다는 꿈을 가지고 있습니다!"
          ],
          [
            "안명욱",
            "Window 다루는 방법",
            "Android의 Window와 WindowInsets에 대해서 알아봅니다. System UI 영역에 우리 앱을 draw하거나 풀스크린 모드로 화면을 구성 할 때, Display Cutout 대응 등 WindowInset이 활용되는 경우와 주의해야 할 점들에 대해 알아봅니다. Google 개발자 Chris Banes가 발표한 Becoming a master window fitters(Droidcon NYC 2017)를 기반으로 준비하였으며, 최신사항을 반영하였습니다.",
            "발표를 듣기 위한 사전 지식 : 안드로이드 기본 지식\n청중대상 : \n1) Window와 WindowInsets에 대해 알고 싶은 개발자\n2) 풀스크린으로 앱을 개발할 계획이 있는 개발자\n3)System UI의 높이값을 알아내기 위해 StrackOverFlow에서 검색해본적 있는 개발자\n4) android:fitSystemWindows=”true”로 설정했는데, 아무것도 변하지 않아 당황해본 적 있는 개발자",
            "카카오에서 일하고 있는 평범한 안드로이드 개발자입니다. 평범하지 않은 개발자로 성장하기 위해 노력하고 있습니다."
          ]
        ],
        [
          "16:45~17:30",
          [
            "정현지",
            "Dagger vs Koin 무엇이 좋을까요?",
            "1. DI란 무엇일까?\n2. Dagger란 무엇일까?\n3. Koin란 무엇일까?\n4. 기본적인 두개의 기술에 대한 예시를 들면서 공통점과 차이점은 무엇일까?\n5. 본론\n  - 이렇게 사용해 보자( 예시 )\n  - Dagger / Koin 적용해보기\n  - 무엇이 우리 프로젝트에 더 어울릴까?\n  - DI 를 프로젝트에 적용했을 때 장단점은 무엇이 있을까?\n  - DI를 공부하고 이렇게 적용하면서 우리가 얻고자 하는 것이 무엇 일까?\n6. 마무리",
            "기초적인 지식과 예시, 적용법을 자세히 알고싶어하는 주니어분들을 위한 발표를 준비하려고합니다. \n\n저 또한 아직 주니어라고 생각하기에 제가 공부하면서 겪었던 어려웠던점, 저도 공부하면서 알아간 것들을 잘 정리하여 새로운 기술에 필요한 기본적인 지식과 예시, 한발 짝  더 나아가 내부에 좀 더 깊이 들어간 내용까지 설명할 수 있도록 할 예정입니다. 저의 발표를 듣고 주니어 분들이 기본지식 + 활용,응용 예시까지 알게 되시고 이후 적용을 고민해보실 수 있도록 준비해 보겠습니다!",
            "캐시슬라이드를 서비스하는 NBT에서 안드로이드 개발자로 일하는 4년차 개발자 정현지 입니다. 현재 GDG Android korea 운영진을 맡고있습니다. 성장을 위해 꾸준히 도전하고 부딪치기를 좋아합니다. "
          ],
          [
            "남반석",
            "SVC 패턴으로 앱 쉽게 만들기",
            '안드로이드 앱 개발에 불편함을 느껴 "어떻게 더 쉽게 코드를 짤 수 있을까?"를 고민했습니다. 발표에서는 이 고민 포인트를 공유하고 SVC 패턴의 탄생 배경과 다른 패턴들과의 차이를 비교하고, SVC를 통해서 스펙이 많아 복잡한 화면을 어떻게 나눠서 유지보수를 쉽게 할 수 있을지, RecyclerView에서 ViewModel활용법 등 노하우를 공유합니다.',
            "MVP, MVVM 둘중에 하나라도 경험한 개발자.\n또는 앱 화면 공통 구조를 만들어본 경험이 있는 개발자. (BaseActivity, BaseFragment 등)",
            "안드로이드 개발 6년차입니다. 네이버에서 개발중이며 5개의 앱 개발 프로젝트에 참여했습니다. (포스트, 블로그, 디스코, 오디오클립, 셀렉티브) 성격과 머리가 단순해서 쉬운 개발, UX, UI을 추구합니다."
          ],
          [
            "차영호",
            "Android Gradle Plugin 버그 잡기",
            "* AOSP Ecosystem 소개\n* Andorid Gradle Plugin(AGP) 간단 소개\n* 적절한 AGP 브랜치/태그 찾기\n* AGP를 직접 빌드 및 설치\n* AGP의 task 구현 살펴보기\n* 찾은 버그를 AOSP issue tracker에 등록하기\n* 버그 수정을 AOSP gerrit에 등록하기\n* 후기 ",
            "1) Android 앱을 gradle을 이용해 빌드해 보신 분\n2) 기본적인 java api에 대한 이해를 가지고 계신 분\n3) Android 개발 도구에 관심 있으신 분\n4) AOSP에 기여하고 싶으신 분",
            "Android 플랫폼 및 개발도구에 관심이 많은 개발자이며, 라인 플러스에서 안드로이드 앱 개발을 하고 있습니다."
          ]
        ],
        [
          "17:30~18:15",
          [
            "김범준",
            "Release ViewPager2!",
            "최근 기존에 이야기만 무성하던 ViewPager2가 alpha 버전으로. 배포되었다는 소식 들으셨나요?. 아직 알파 버전이기는 하지만 왜 기존 ViewPager 대신 ViewPager2를 업데이트 했는지 실제 코드 변화는 어떻게 될지 함께 이야기 해봅시다.",
            "ViewPager를 사용해 보았다.",
            " 현재 레이니스트에서 안드로이드 개발자로 근무하는  김범준 입니다."
          ],
          [
            "박미륵",
            "Advanced MVP",
            "MVP 패턴을 사용하면서 겪었던 문제점과 이를 개선하기 위해 시도한 다양한 방법들을 소개하고 싶습니다.",
            "1) MVP 패턴을 아시는분\n2) MVVM 패턴으로 왠지 변경하기 싫으신 분",
            "함수형 프로그래밍과 테스팅에 관심이 많은 안드로이드 개발자 입니다. 레이니스트에서 뱅크샐러드 서비스를 만들고 있습니다."
          ],
          [
            "신정아",
            "Tensorflow Lite 부터 MLKit, Mobile GPU 활용까지",
            "안드로이드 환경에서의 Tensorflow Lite, ML Kit 활용법과 경험기를 공유합니다. 딥러닝 비전 모델 데모와 함께 더 나은 안드로이드 모바일 머신러닝 환경을 갖추기 위한 프리셋을 알아보고, Tensorflow Lite에서 새로 지원되는 기능인 Mobile GPU의 활용 까지 살펴봅니다.",
            "1) 모바일 머신러닝에 관심 있는 모든 분들\n2) Tensorflow Lite 혹은 ML Kit에 도전해보고 싶은 안드로이드 개발자\n3) 모바일에 자신의 Custom 딥러닝 모델을 적용해보고 싶은 연구자\n\n본 세션은 딥러닝에 대한 개괄적인 지식이 있으시면 더욱 알차게 들으실 수 있습니다.",
            "모바일 머신러닝 기술에 가치를 느끼는 안드로이드 개발자입니다. Research Engineer들과의 더 나은 협업을 위해 딥러닝을 공부하며, 지표 측정과 테스트를 생활화 합니다."
          ]
        ]
      ]
    };
  }

  public render() {
    return (
      <Store.Consumer>
        {context => (
          <Wrapper name="schedule">
            <div className="title">SCHEDULE</div>
            <div className="desc">
              드로이드 나이츠 2019는 3트랙으로 진행됩니다.
            </div>
            <ScheduleContent>
              {this.props.isPhone ? (
                // tracktable for mobile
                <TrackTable>
                  {/* track 1 */}
                  <TrackTableColumnBlock>
                    <div>09:00~09:50</div>
                    <div>
                      <p>등록</p>
                    </div>
                  </TrackTableColumnBlock>
                  <TrackTableColumnBlock>
                    <div>09:50~10:00</div>
                    <div>
                      <p>키노트</p>
                    </div>
                  </TrackTableColumnBlock>
                  <TrackTableHeaderMobile>
                    <img src={require("../assets/images/track-1.png")} alt="" />
                  </TrackTableHeaderMobile>
                  {this.state.tracks.map((value, idx) =>
                    idx === 4 ? (
                      <TrackTableColumnBlock>
                        <div style={{ width: 70 }}>13:25~15:00</div>
                        <div>
                          <p>점심시간</p>
                        </div>
                      </TrackTableColumnBlock>
                    ) : (
                      <TrackTableColumn>
                        <div style={{ width: 70 }}>{value[0]}</div>
                        <div>
                          <p style={{ color: "#45fc17" }}>{value[1][0]}</p>
                          <p>{value[1][1]}</p>
                        </div>
                      </TrackTableColumn>
                    )
                  )}
                  {/* track 2 */}
                  <TrackTableHeaderMobile>
                    <img src={require("../assets/images/track-2.png")} alt="" />
                  </TrackTableHeaderMobile>
                  {this.state.tracks.map((value, idx) =>
                    idx === 4 ? (
                      <TrackTableColumnBlock>
                        <div style={{ width: 70 }}>13:25~15:00</div>
                        <div>
                          <p>점심시간</p>
                        </div>
                      </TrackTableColumnBlock>
                    ) : (
                      <TrackTableColumn>
                        <div style={{ width: 70 }}>{value[0]}</div>
                        <div>
                          <p style={{ color: "#00f0e4" }}>{value[2][0]}</p>
                          <p>{value[2][1]}</p>
                        </div>
                      </TrackTableColumn>
                    )
                  )}
                  {/* track 3 */}
                  <TrackTableHeaderMobile>
                    <img src={require("../assets/images/track-3.png")} alt="" />
                  </TrackTableHeaderMobile>
                  {this.state.tracks.map((value, idx) =>
                    idx === 4 ? (
                      <TrackTableColumnBlock>
                        <div style={{ width: 70 }}>13:25~15:00</div>
                        <div>
                          <p>점심시간</p>
                        </div>
                      </TrackTableColumnBlock>
                    ) : (
                      <TrackTableColumn>
                        <div style={{ width: 70 }}>{value[0]}</div>
                        <div>
                          <p style={{ color: "#ffd26e" }}>{value[3][0]}</p>
                          <p>{value[3][1]}</p>
                        </div>
                      </TrackTableColumn>
                    )
                  )}
                </TrackTable>
              ) : (
                // tracktable for com
                <TrackTable>
                  <TrackTableColumnBlock>
                    <div>09:00~09:50</div>
                    <div>
                      <p>등록</p>
                    </div>
                  </TrackTableColumnBlock>
                  <TrackTableColumnBlock>
                    <div>09:50~10:00</div>
                    <div>
                      <p>키노트</p>
                    </div>
                  </TrackTableColumnBlock>
                  <TrackTableHeader>
                    <div>
                      <img
                        src={require("../assets/images/track-1.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src={require("../assets/images/track-2.png")}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src={require("../assets/images/track-3.png")}
                        alt=""
                      />
                    </div>
                  </TrackTableHeader>
                  {this.state.tracks.map((value, idx) =>
                    idx === 4 ? (
                      <TrackTableColumnBlock>
                        <div>13:25~15:00</div>
                        <div>
                          <p>점심시간</p>
                        </div>
                      </TrackTableColumnBlock>
                    ) : (
                      <TrackTableColumn>
                        <div>{value[0]}</div>
                        <div>
                          <p>
                            {value[1][0]}{" "}
                            <span
                              onClick={async () => {
                                await context.setPopUpInfo(
                                  {
                                    title: value[1][1],
                                    summary: value[1][2],
                                    who: value[1][3],
                                    name: value[1][0],
                                    jop: value[1][4]
                                  },
                                  1
                                );
                                context.openPopUp();
                              }}
                            >
                              <img
                                src={require("../assets/images/question-mark.png")}
                                alt=""
                              />
                              세션 소개
                            </span>
                          </p>
                          <p>{value[1][1]}</p>
                        </div>

                        <div>
                          <p>
                            {value[2][0]}{" "}
                            <span
                              onClick={async () => {
                                await context.setPopUpInfo(
                                  {
                                    title: value[2][1],
                                    summary: value[2][2],
                                    who: value[2][3],
                                    name: value[2][0],
                                    jop: value[2][4]
                                  },
                                  2
                                );
                                context.openPopUp();
                              }}
                            >
                              <img
                                src={require("../assets/images/question-mark.png")}
                                alt=""
                              />
                              세션 소개
                            </span>
                          </p>
                          <p>{value[2][1]}</p>
                        </div>

                        <div>
                          <p>
                            {value[3][0]}{" "}
                            <span
                              onClick={async () => {
                                await context.setPopUpInfo(
                                  {
                                    title: value[3][1],
                                    summary: value[3][2],
                                    who: value[3][3],
                                    name: value[3][0],
                                    jop: value[3][4]
                                  },
                                  3
                                );
                                context.openPopUp();
                              }}
                            >
                              <img
                                src={require("../assets/images/question-mark.png")}
                                alt=""
                              />
                              세션 소개
                            </span>
                          </p>
                          <p>{value[3][1]}</p>
                        </div>
                      </TrackTableColumn>
                    )
                  )}
                </TrackTable>
              )}
            </ScheduleContent>
            <div className="desc2">
              * 트랙과 세션은 행사일정과 스피커분들의 사정에 따라서 변경될 수
              있습니다.
            </div>
            <Boarder />
            <div className="title">PROGRAM</div>
            <div className="desc">
              2019 드로이드 나이츠는 세션 이외의 다양한 프로그램을 준비하고
              있습니다.
            </div>
            <ProgramContent>
              <img src={require("../assets/images/program.png")} alt="" />
              <ProgramItemWrapper>
                <ProgramItem>
                  <p>코드리뷰</p>
                  <p>
                    다른사람들은 어떻게 코딩할까요? <br /> 서로 코드를
                    공유해봅시다.
                  </p>
                </ProgramItem>
                <ProgramItem>
                  <p>코드랩</p>
                  <p>
                    해봐야지 생각하면서 미뤄둔 기술이 있나요? 드로이드
                    나이츠에서 한번 시작해보세요!
                  </p>
                </ProgramItem>
                <ProgramItem>
                  <p>실시간 퀴즈쇼</p>
                  <p>
                    당신의 개발력을 뽐내보세요! <br />
                    푸짐한 상품이 함께합니다.
                  </p>
                </ProgramItem>
              </ProgramItemWrapper>
            </ProgramContent>
          </Wrapper>
        )}
      </Store.Consumer>
    );
  }
}