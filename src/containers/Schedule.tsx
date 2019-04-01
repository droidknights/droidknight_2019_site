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
    height: 34px;
    display: flex;
    align-items: center;

    flex: 1;
    & > img {
      width: 100px;
    }

    & > span {
      margin-left: 10px;
    }
  }
`;

const TrackTableHeaderMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 19px;
  margin-top: 45px;
  & > div {
    width: 100px;
    height: 33.8px;
    position: relative;
    background-size: 100% 100%;
    & > span {
      position: absolute;
      top: 50%;
      left: calc(100% + 10px);
    }
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
      & > span {
        color: #45fc17;
      }
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
    font-size: 18px;
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

  &.last {
    width: 100%;
    margin-top: 22px;
    display: flex;

    & > p:nth-child(1) {
      color: #01efe3;
      margin: 0;
      margin-right: 10px;
    }

    & > p:nth-child(2) {
      margin: 0;
    }
  }

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    height: 140px;
    margin-bottom: 23px;

    &.last {
      display: block;

      & > p:nth-child(2) {
        margin: inherit;
        margin-bottom: 0;
      }
    }
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
            "네이버에서 안드로이드 앱을 8년간 만들면서 온갖 앱의 문제를 해결하고, 사고도 내서 욕을 먹기도 했습니다. 안드로이드 프로그래밍 next step을 저술했고 근래에는 밴드 앱을 개발합니다. 승마왕이라는 필명을 사용합니다."
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
            "1. 동적으로 다른 설정을 처리를 적용하는 방법이 궁금하신 분들\n2. RxJava 를 이용한 동적 처리 방법이 궁금하신 분들\n3. 동작과 처리의 레이어 분리이 궁금하신 분들",
            "2010년부터 안드로이드 개발을 시작하여 현재 GrabTaxi 에서 승객, 기사앱의 Geo 팀 테크 리더로 일하고 있습니다."
          ]
        ],
        [
          "11:10~11:40",
          [
            "하동현",
            "지금까지 이런 간단한 Logic 처리는 없었다. 이것은 Rx인가, UI 이벤트인가?",
            "한 화면에 다양한 UI가 존재하며 각 UI마다 복잡한 로직이 있으며, 처리하다 보면 엉키게 되어 유지보수를 하기 어렵게 됩니다.\nRxBinding을 이용하면 손쉽게 중복코드를 처리하고 UI 이벤트를 조합하여 문제를 해결할 수 있습니다.\nRxBinding의 기본 사용방법과 프로덕트에 적용한 경험을 다양한 예시와 함께 설명합니다.",
            "- 복잡한 View에 대하여 Logic 처리의 어려움이 있는 분\n- 모든 이벤트 처리를 Rx로 해결하고 싶으신 분\n- RxBinding이 실제 프로덕션에서 어떻게 사용되는지 알고 싶으신 분",
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
            "황성현",
            "Clean Architecture (in Android) Revised",
            "Droid Knights 2017 발표 중 하나였던 [Clean Architecture in Android] 발표를 2019년의 시각으로 다시 재구성을 시도합니다. Android라는 콘텍스트를 조금 벗어나 Clean Architecture의 문제의식과 이를 구현한 코드 여럿을 함께 살펴보고 얘기를 나눕니다.",
            "안드로이드 개발 경험이 있으신 분, Clean Architecture 등 안드로이드 아키텍쳐에 대한 일반적인 이해가 있으신 분",
            "뱅크샐러드 안드로이드 앱의 초기 개발을 담당했고, 현재는 뱅크샐러드 백엔드 마이크로 서비스를 설계하고 개발합니다. 기술로 사회의 장벽을 낮추는 일에 관심이 많습니다."
          ],
          [
            "남상균",
            "코틀린 디자인 패턴",
            "코틀린은 언어 자체에서 디자인 패턴을 효과적으로 반영할 수 있도록 설계되어 있습니다. 전통적인 GoF의 23가지 디자인 패턴이 코틀린에서 어떻게 적용될 수 있는지 살펴보고, 더 효율적인 코드를 작성하는 방법에 대해 이야기 합니다. 특히 각 패턴들이 자바로는 어떻게 구현되었는지 비교해 보며 코틀린 언어에 대한 이해도를 높이는 계기가 되었으면 합니다.",
            "코틀린에 대한 기본 지식이 필요합니다. 코틀린 언어에는 이제 익숙해졌지만 보다 효율적인 코드를 작성하기 위해 고민하는 분들이면 모두 좋을 것 같습니다.",
            "NBT에서 기술이사로 광고,콘텐츠 시스템 개발을 책임지고 있습니다. 모바일 초기부터 다양한 플랫폼 개발을 경험했으며, 현재는 백엔드에서의 효율적인 모바일 지원을 고민합니다. 서비스를 만들며 함께 성장하는 것을 중요하게 생각합니다. 애자일 개발 문화를 반영하는 조직을 만들기 위해 노력합니다."
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
            "오프라인과 앱 서비스",
            "인터넷 끊김, 속도저하에 따라 네트워크 없이 서비스를 안정적으로 제공할 방법에 대하여 고민하였습니다. 메모리/디스크 캐시를 이용한 데이터 임시저장, 서버 데이터가 필요없는 서비스에 대한 오프라인 서비스 모드 제공, 오프라인 스토리지에 서버 데이터를 저장하고 동기화 하는 방법 등, 이 과정에서 겪은 문제점과 해결방법 그리고 발전 방향에 대해 공유합니다.",
            "글로벌 상용 모바일 앱을 개발중/준비중인 개발자, 기획자",
            "안드로이드를 중심으로 모바일 개발을 하고 있는 8년차 개발자입니다.\n팬택, 직방을 거쳐 작년부터는 도쿄에서 근무중입니다. "
          ],
          [
            "장인수",
            "communication between flutter and native modules baby step",
            "Flutter의 전반적인 설명 후 Flutter 와 Native Module 간의 통신 개발하는 방법을 Baby Step 으로 소개 하고자 합니다.",
            "Flutter 관심자, Cross-Platform 관심자,  Android 개발자",
            "팬택 시리우스 안드로이드 폰 개발로 처음으로 Android 개발에 입문 하여 다수의 삼성 갤럭시폰 모델, 캐나다에서 SNS 플랫폼 개발 하였고, 한국으로 귀국 후 ZUMO, 카쉐어링 모바일 서비스를 개발 하였습니다. 현재는 우아한형제들에서 배민마켓 모바일서비스를 개발합니다."
          ]
        ],
        ["13:25~15:00", "점심시간"],
        [
          "15:00~15:45",
          [
            "강사룡",
            "안드로이드 아키텍처 총정리",
            "당신의 아키텍처, 뭔가 잘못된 것 같은 느낌에 시달리고 있지는 않나요? MVP부터 MVVM, Flux 그리고 클린 아키텍처까지 Best Practice를 중심으로 현업에서 어떤 아키텍처를 적용할 것인가에 대해, 그리고 아키텍처 관점에서 의존성 주입, Rx, 코루틴, 멀티모듈 등의 기술을 어떻게 적용할 수 있을지, 2018년에 이어 더욱 깊은 내용으로 다뤄봅니다.",
            "누구에게 보여줘도 부끄럽지 않을 코드를 만들고 싶은 모든 안드로이드 개발자",
            "경력 19년차 개발자. 넥슨 등에서 근무 후, 미국 창업 도중 모바일 개발을 접한 후, 이후 다양한 설계방식을 시도해 옴. 현재는 IBM iX Japan에서 다양한 고객의 모바일 개발을 돕고 있음"
          ],
          [
            "정동진",
            "코루틴 너 은행에서 뭐하니?",
            "1. 코루틴을 어느 곳에서 사용하고, 어떤 강점을 갖는지에 대한 간략한 설명\n2. 샘플 학습과 안드로이드 적용\n3. 실무코드에 적용 및 문제점 및 적용법\n4. 적용된 소스코드 설명\n5. 최적화된 코드에 대한 고민",
            "예재 코드를 돌려보고 코루틴을 적용하시고 싶으신 분\n실무에서 사용한 코루틴 코드를 보고 싶으신 분",
            "임베디드, MFC, ActiveX 거처 2009년 안드로이드를 개발 했습니다. 2011년 부터 은행권 개발을 시작해서 현재 하나은행에서 안드로이드 개발자로 일하고 있습니다."
          ],

          [
            "양찬석",
            "구글 플레이의 다이나믹 딜리버리 \n(APK는 이제 안녕)",
            "1. 왜 다이나믹 딜리버리가 필요할까?\n2. 구글에 앱 사인 키를 알려주세요.  \n3. 앱 번들 기능 소개 및 적용법\n4. 앱 번들 효과적으로 테스팅 하기\n5. 앱 번들 이 후 - 다이나믹 피쳐 모듈 소개\n6. 다이나믹 피쳐 모듈을 어떻게 활용할 수 있을까? (구현 및 UX)\n7. 앞으로 앱은 어떻게 배포되고 개발될까?",
            "구글 플레이의 앱 번들(App Bundle), 다이나믹 피쳐 모듈(Dynamic Feature Module), 인스턴트 앱(Instant App)등 새로운 배포 방법에 관해 관심 있는 분들 혹은 다운로드되는 APK 크기를 줄이는데 관심있는 분들.",
            "구글 코리아에서 Developer Advocate로 안드로이드 및 기타 구글의 다양한 기술을 다른 개발자 및 회사에 소개하는 역할을 합니다. 2009년부터 2015년까지 안드로이드 앱 개발자로 활동했습니다. 현재는 개발자 교육 및 파트너 문제 해결을 위해 안드로이드에서 새롭게 추가되는 기능 중심으로 살펴보고 있습니다."
          ]
        ],
        [
          "16:00~16:30",
          [
            "권태환",
            "코루틴 안전! 이쁘게 코루틴 사용하는 방법은?",
            "코루틴은 어렵지 않게 적용할 수 있다. 그러면 코루틴 내에서 발생하는 오류를 어떻게 캐치하고 안전하게 사용할 수 있을까? 코루틴 내에서 발생하는 오류를 안전하게 처리하는 방법을 소개하고, 코루틴으로 라이브러리 형태로 접근 하는 방법을 소개하려고 한다.\n- 코루틴 소개\n- 코루틴 사용 중 발생하는 오류 처리 방법을 알아본다\n- 코루틴 라이브러리를 직접 만들고 활용해보는 방법을 알아본다\n- 실제 적용 사례를 함께 소개한다",
            "코틀린 코드 활용에 문제가 없다.\nkotlin coroutines에 관심이 있다.",
            "7년차 안드로이드 개발자로 GDG Seoul 운영진, 드로이드나이츠 운영진이며, 3년 전부터 코틀린 학습 및 실 프로젝트에 적용하여 사용중입니다. 꿈 많은 개발자가 되자! 블로그를 통해 안드로이드 개발에 관련한 다양한 글을 비주기로 업로드하고 있으며, 현재는 카카오페이에서 안드로이드 개발을 하고 있습니다."
          ],
          [
            "박민석, 유진의",
            "PWA 를 이용한 안드로이드 웹뷰 성능 개선기",
            "웹뷰를 포함한 앱이 어떻게 하면 사용자에게 더 빠른 속도로 좋은 경험을 전달할 수 있을까요? PWA와 함께 기존 웹뷰의 한계를 극복하고 사용자 경험을 한층 더 발전시킨 경험을 공유합니다.",
            "1) 웹뷰를 이용한 하이브리드 앱을 만드시는 분들\n2) 웹뷰를 포함한 앱의 성능향상을 위해 불철주야 고민하시는 분들\n3) 오프라인에도 돌아가는 앱에 대해 고민하시는 분들",
            "박민석 - 휴마트컴퍼니에서 '트로스트' 서비스의 안드로이드 클라이언트를 개발하고 있습니다.\n유진의 - 안녕하세요. 진의입니다. 세상 모든 사람들과 친구가 되겠다는 꿈을 가지고 있습니다!"
          ],
          [
            "안명욱",
            "안드로이드 윈도우 마스터 되기",
            "System UI 영역에 앱을 draw하거나 풀스크린 모드로 화면을 구성 할 때 Display Cutout 대응 등 WindowInset이 활용되는 경우와 주의해야 할 점들에 대해 알아봅니다.\n구글 개발자 Chris Banes가 Droidcon NYC 2017에서 발표한 Becoming a master window fitters를 기반으로 준비하였으며 최신사항을 반영하였습니다.",
            "1) Window와 WindowInsets에 대해 알고 싶은 분\n2) 풀스크린으로 앱을 개발할 계획이 있는 분\n3)System UI의 높이값을 알아내기 위해 StrackOverFlow에서 검색해본적 있는 분\n4) android:fitSystemWindows=”true”로 설정했는데, 아무것도 변하지 않아 당황해본 적 있는 분",
            "카카오에서 일하고 있는 평범한 안드로이드 개발자입니다. 평범하지 않은 개발자로 성장하기 위해 노력하고 있습니다."
          ]
        ],
        [
          "16:45~17:30",
          [
            "정현지",
            "Dagger vs Koin 무엇이 좋을까요?",
            "1. DI란 무엇일까?\n3. Koin란 무엇일까 ?\n2. Dagger란 무엇일까 ?\n4. 기본적인 두개의 기술에 대한 예시를 들면서 공통점과 차이점은 무엇일까?\n5. 본론\n    - 둘의 차이점 비교\n    - DI 를 적용했을 때 장단점은?\n    - DI를 공부하고 이렇게 적용하면서 우리가 얻고자 하는 것은?",
            "기초적인 지식과 예시, 적용법을 자세히 알고싶어하는 주니어분들을 위한 발표를 준비하려고합니다.",
            "캐시슬라이드를 서비스하는 NBT에서 안드로이드 개발자로 일하는 4년차 개발자 정현지 입니다. 현재 GDG Android korea 운영진을 맡고있습니다. 성장을 위해 꾸준히 도전하고 부딪치기를 좋아합니다."
          ],
          [
            "남반석",
            "SVC 패턴으로 앱 쉽게 만들기",
            '"어떻게 더 쉽게 코드를 짤 수 있을까?"를 고민했습니다. 고민 포인트를 공유하고 SVC 패턴의 탄생 배경과 다른 패턴들과의 차이를 비교하고, SVC를 통해서 스펙이 많아 복잡한 화면을 어떻게 나눠서 유지보수를 쉽게 할 수 있을지, RecyclerView에서 ViewModel활용법 등 노하우를 공유합니다.',
            "MVP, MVVM 둘중에 하나라도 경험한 개발자. 또는 앱 화면 공통 구조를 만들어본 경험이 있는 개발자. (BaseActivity, BaseFragment 등)",
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
          "17:45~18:15",
          [
            "박미륵",
            "Advanced MVP",
            "MVP 패턴을 사용하면서 겪었던 문제점과 이를 개선하기 위해 시도한 다양한 방법들을 소개하고 싶습니다.",
            "1) MVP 패턴을 아시는분\n2) MVVM 패턴으로 왠지 변경하기 싫으신 분",
            "함수형 프로그래밍과 테스팅에 관심이 많은 안드로이드 개발자 입니다. 레이니스트에서 뱅크샐러드 서비스를 만들고 있습니다."
          ],
          [
            "김범준",
            "ViewPager2 설레발 치기!",
            "아직 알파 단계인 ViewPager2에 대하여 이야기 하고자 합니다. 왜 ViewPager2가 나온 걸까요? 어떤 유용한 기능들이 추가 되었는지, 기존 ViewPager를 사용 할 때와 어떤 차이점들이 있는지등을 내부 구현 코드와 예시를 적절히 섞어 설명드리려 합니다.",
            "ViewPager가 무엇인지 아시는 분, 사용 해 보신 분, 알고 싶으신 분! \nViewPager를 사용하며 화가났던 적 힘들었던 적이 한번이라도 있으신 분!\nViewPager2 글보다 실제 설명을 통해 알고 싶으신 분!\n긴 세미나의 마지막을 가볍게 즐기고 싶으신 분들 환영합니다 :)",
            "뱅크샐러드(레이니스트) 에서 안드로이드 개발자로 서비스를 만들고 있습니다. Kotlin, FRP에 많은 관심을 가지고 있습니다 :)"
          ],
          [
            "신정아",
            "Tensorflow Lite 부터 ML Kit, Mobile GPU 활용 까지",
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
                      <p>
                        키노트 <span>E2,3,4</span>
                      </p>
                    </div>
                  </TrackTableColumnBlock>
                  <TrackTableHeaderMobile>
                    <div
                      style={{
                        backgroundImage: `url(${require("../assets/images/track-1.png")})`
                      }}
                    >
                      <span style={{ color: "#45fc17" }}>E2,3,4</span>
                    </div>
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
                    <div
                      style={{
                        backgroundImage: `url(${require("../assets/images/track-2.png")})`
                      }}
                    >
                      <span style={{ color: "#00f0e4" }}>E5</span>
                    </div>
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
                    <div
                      style={{
                        backgroundImage: `url(${require("../assets/images/track-3.png")})`
                      }}
                    >
                      <span style={{ color: "#ffd26e" }}>E6</span>
                    </div>
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
                      <p>
                        키노트 <span>E2,3,4</span>
                      </p>
                    </div>
                  </TrackTableColumnBlock>
                  <TrackTableHeader>
                    <div>
                      <img
                        src={require("../assets/images/track-1.png")}
                        alt=""
                      />
                      <span style={{ color: "#45fc17" }}>E2,3,4</span>
                    </div>
                    <div>
                      <img
                        src={require("../assets/images/track-2.png")}
                        alt=""
                      />
                      <span style={{ color: "#00f0e4" }}>E5</span>
                    </div>
                    <div>
                      <img
                        src={require("../assets/images/track-3.png")}
                        alt=""
                      />
                      <span style={{ color: "#ffd26e" }}>E6</span>
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
                    나의 코드를 간략히 소개하고, 다른 개발자들에게 리뷰를
                    받습니다. <br />
                    리뷰 과정 참관도 가능합니다.
                  </p>
                </ProgramItem>
                <ProgramItem>
                  <p>코드랩</p>
                  <p>
                    4가지 flutter 튜토리얼 코드를 각자 학습하며, 궁금한 부분이
                    생기면 도움을 요청할 수 있습니다.
                    <br />
                    (노트북 지참)
                  </p>
                </ProgramItem>
                <ProgramItem>
                  <p>라이트닝 토크</p>
                  <p>
                    일상적인 업무 속에서 성장하기 위한 노력을 공유하고, 함께
                    방법을 찾아갑니다. 짧은 발표 후 주제별로 그룹지어 이야기를
                    나눕니다.
                  </p>
                </ProgramItem>
              </ProgramItemWrapper>
              <ProgramItemWrapper>
                <ProgramItem className="last">
                  <p>상시운영 퀴즈부스</p>
                  <p>자신의 코딩 실력을 뽐내어 랭킹 1위에 도전해보세요!</p>
                </ProgramItem>
              </ProgramItemWrapper>
            </ProgramContent>
          </Wrapper>
        )}
      </Store.Consumer>
    );
  }
}
