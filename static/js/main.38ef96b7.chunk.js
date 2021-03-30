(this["webpackJsonpcoffee-landing-page"]=this["webpackJsonpcoffee-landing-page"]||[]).push([[0],{69:function(n,e,t){"use strict";t.r(e);var i,r=t(0),a=t.n(r),c=t(7),s=t.n(c),o=t(12),d=t(13),l=d.b.div(i||(i=Object(o.a)(["\n\n"]))),h=t(2);function m(){return Object(h.jsx)(l,{})}var x,j,p,f,b,g,u,O,y,v=t(52),w=d.b.div(x||(x=Object(o.a)(["\n  display: block;\n  height: 8vh;\n  width: 100%;\n  background: var(--bg);\n  z-index: 1;\n  position: sticky;\n  top: 0;\n\n  @media(max-width: 1280px) {\n    display: flex;\n    align-items: center;\n  }\n"]))),z=d.b.div(j||(j=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100%;\n  gap: 3rem;\n  \n  span {\n    font-size: 3rem;\n    font-weight: 700;\n  }\n\n  nav > ul {\n    display: flex;\n    gap: 3rem;\n  }\n\n  div > a:first-child {\n    margin-right: 3rem;\n  }\n"]))),k=d.b.div(p||(p=Object(o.a)(["\n  margin: 8vh 1.5rem 0 1.5rem;\n  nav {\n    a {\n      span {\n        font-size: 28px;\n        font-weight: 700;\n      }\n    }\n    ul {\n      display: flex;\n      flex-direction: column;\n      gap: 1.5rem;\n      font-size: 1rem;\n      margin-top: 2rem;\n    }\n  }\n\n"]))),D=d.b.div(f||(f=Object(o.a)(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  a {\n    span {\n      font-size: 28px;\n      font-weight: 700;\n    }\n  }\n  \n"]))),F=t(101),C=t(100),E=t(99),S=t(51),A=t.n(S),B=t(96);function J(){var n=Object(r.useState)(!1),e=Object(v.a)(n,2),t=e[0],i=e[1];function a(){i(!t)}var c=Object(B.a)({paper:{background:"#0F100F"}})();return Object(h.jsxs)(w,{children:[Object(h.jsx)(F.a,{mdDown:!0,children:Object(h.jsxs)(z,{children:[Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("span",{children:"!tired"})}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"order"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"our company"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"our coffee"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"nearby coffee shop"})})]})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"/",children:"login"}),Object(h.jsx)("a",{href:"/",children:"sing up"})]})]})}),Object(h.jsxs)(F.a,{lgUp:!0,children:[Object(h.jsxs)(C.a,{onClick:function(){return a()},children:[Object(h.jsx)(A.a,{style:{fontSize:40}}),Object(h.jsx)(E.a,{classes:{paper:c.paper},anchor:"left",open:t,onClose:function(){return a()},onOpen:function(){return a()},children:Object(h.jsx)(k,{children:Object(h.jsxs)("nav",{children:[Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("span",{children:"!tired"})}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"order"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"our company"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"our coffee"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"nearby coffee shop"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"login"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"sing up"})})]})]})})})]}),Object(h.jsx)(D,{children:Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("span",{children:"!tired"})})})]})]})}var K,U=d.b.div(b||(b=Object(o.a)(["\n  display: block;\n  width: 100%;\n"]))),I=d.b.section(g||(g=Object(o.a)(['\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-position: 40% center;\n  background-image: url("assets/bg1.jpg");\n  \n  article {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 92vh;\n\n    div {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      max-width: 1080px;\n      max-height: 575px;\n\n      h1 {\n        font-size: 12.5rem;\n        margin-bottom: 2rem;\n      }\n\n      p:first-of-type {\n        font-weight: 500;\n        font-size: 2.5rem;\n        margin-bottom: 5rem;\n      }\n\n      button {\n        background: var(--highlight);\n        color: var(--bg);\n        font-size: 2rem;\n        font-weight: 700;\n        border: 0;\n        width: 280px;\n        height: 68px;\n        border-radius: 1.5rem;\n        margin-bottom: 2rem;\n\n        transition: filter 0.3s;\n      }\n\n      button:hover, button:focus {\n        filter: brightness(0.8);\n        \n      }\n\n      p:last-of-type {\n        font-size: 1.125rem;\n      }\n    }\n  }\n\n  @media(max-width: 1080px) {\n    article {\n      div {\n        max-width: 760px;\n        max-height: 100%;\n\n        h1 {\n          font-size: 9.5rem;\n        }\n\n        p:first-of-type {\n          font-size: 2rem;\n          margin-bottom: 4rem;\n        }\n\n        button {\n          font-size: 1.75rem;\n          width: 250px;\n          height: 58px;\n          margin-bottom: 1.5rem;\n        }\n\n        p:last-of-type {\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n  @media(max-width: 760px) {\n    article {\n      div {\n        max-height: 575px;\n\n        h1 {\n          font-size: 7rem;\n        }\n\n        p:first-of-type {\n          font-size: 1.5rem;\n          margin-bottom: 3rem;\n        }\n\n        button {\n          font-size: 1.25rem;\n          width: 220px;\n          height: 40px;\n          margin-bottom: 1.5rem;\n        }\n\n        p:last-of-type {\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n  @media(max-width: 480px) {\n    article {\n      div {\n        max-height: 575px;\n        max-width: 320px;\n        h1 {\n          font-size: 5rem;\n        }\n\n        p:first-of-type {\n          font-size: 1.25rem;\n          text-align: center;\n          margin-bottom: 2rem;\n        }\n\n        button {\n          font-size: 1.25rem;\n          width: 220px;\n          height: 40px;\n          margin-bottom: 2rem;\n        }\n\n        p:last-of-type {\n          font-size: 1rem;\n        }\n      }\n    }\n  }\n']))),L=d.b.section(u||(u=Object(o.a)(['\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-areas:\n  "main-content main-content kenya";\n  background-size: cover;\n  background-position: center center;\n  background-image: url("assets/bg2.jpg");\n  \n  article {\n    grid-area: main-content;\n    display: flex;\n    align-items: center;\n    height: 92vh;\n\n    div {\n      display: flex;\n      flex-direction: column;\n      gap: 3rem;\n      max-height: 560px;\n      max-width: 70%;\n\n      margin-left: 10rem;\n\n      p {\n        font-size: 3.5rem;\n        font-weight: 500;\n      }\n\n      span > a {\n        font-size: 2rem;\n        text-decoration-line: underline;\n      }\n    }\n  }\n\n  &>div {\n    grid-area: kenya;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10rem;\n  }\n\n  @media(max-width: 1440px) {\n\n    article {\n      div {\n        max-width: 70%;\n        margin-left: 10rem;\n\n        p {\n          font-size: 2.5rem;\n        }\n\n        span > a {\n          font-size: 1.5rem;\n        }\n      }\n      &>div {\n        margin-right: 0rem;\n      }\n    }\n  }\n\n  @media(max-width: 1080px) {\n    article {\n      div {\n        margin-left: 8rem;\n      }\n    }\n  }\n  @media(max-width: 760px) {\n    display: block;\n    article {\n      div {\n        max-width: 60%;\n        margin-left: 5rem;\n        p {\n          font-size: 2rem;\n        }\n        span > a {\n          font-size: 1.25rem;\n        }\n      }\n    }\n  }\n  @media(max-width: 480px) {\n    article {\n      div {\n        margin-left: 5rem;\n        p {\n          font-size: 1.5rem;\n        }\n        span > a {\n          font-size: 1.25rem;\n        }\n      }\n    }\n  }\n']))),M=d.b.section(O||(O=Object(o.a)(['\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-position: center center;\n  background-image: url("assets/bag.jpg");\n\n  article {\n    display: flex;\n    height: 1116px;\n  }\n  @media(max-width: 1280px) {\n    background-position: center 20%;\n    article {\n      height: 960px;\n    }\n    div {\n      display: flex;  \n      max-width: 540px;\n      p {\n        margin-top: 3rem;\n        text-align: center;\n        font-size: 2.5rem;\n        font-weight: 500;\n      } \n    }\n  }\n  @media(max-width: 760px) {\n    article {\n      height: 960px;\n    }\n    div {\n      display: flex;  \n      max-width: 400px;\n      p {\n        margin-top: 3rem;\n        text-align: center;\n        font-size: 2rem;\n      } \n    }\n  }\n  @media(max-width: 480px) {\n    article {\n      height: 760px;\n    }\n    div {\n      display: flex;  \n      max-width: 320px;\n      p {\n        margin-top: 3rem;\n        text-align: center;\n        font-size: 1.5rem;\n      } \n    }\n  }\n']))),N=d.b.section(y||(y=Object(o.a)(['\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n  ". main-content";\n  justify-content: center;\n  background-size: cover;\n  background-position: 15% center;\n  background-image: url("assets/cup.jpg");\n\n  article {\n    grid-area: main-content;\n    height: 92vh;\n\n    div {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-end;\n      gap: 3rem;\n      max-width: 70%;\n      height: 100%;\n      margin-right: 10rem;\n\n      p {\n        font-size: 3.5rem;\n        font-weight: 500;\n        text-align: right;\n      }\n      \n      span {\n        text-align: right;\n\n        a {\n          font-size: 2rem;\n          text-decoration-line: underline;\n          transition: filter 0.2s;\n\n          &:hover, :focus {\n            filter: brightness(0.7);\n          } \n        }\n      }\n    }\n  }\n\n  @media(max-width: 1440px) {\n    article {\n      div {\n        max-width: 100%;\n        margin-right: 10rem;\n\n        p {\n          font-size: 2.5rem;\n          font-weight: 500;\n        }\n      \n        span > a {\n          font-size: 1.5rem;\n          text-decoration-line: underline;\n          transition: filter 0.2s;\n\n          &:hover, :focus {\n            filter: brightness(0.7);\n          } \n        }\n      }\n    }\n  }\n  @media(max-width: 1080px) {\n    display: block;\n    article {\n      display: flex;\n      justify-content: center;\n      height: 92vh;\n\n      div {\n        display: flex;  \n        justify-content: center;  \n        align-items: center;\n        max-width: 80%;  \n        margin-top: 3rem;\n        margin-right: 0px;\n        gap: 2rem;\n        height: fit-content;\n\n        p {\n          font-weight: 500;\n          text-align: center;\n        }\n      \n        span {\n          text-align: center;\n\n          a {\n            font-size: 2.5rem;\n            text-decoration-line: underline;\n            transition: filter 0.2s;\n\n            &:hover, :focus {\n              filter: brightness(0.7);\n            } \n          }\n        }\n      }\n    }\n  }\n\n  @media(max-width: 760px) {\n    article {\n      div {\n        gap: 1rem;\n        p {\n          font-size: 2rem;\n        }\n        span {\n          a {\n            font-size: 1.25rem;\n          }\n        }\n      }\n    }\n  }\n  @media(max-width: 480px) {\n    background-position: 15% center;\n    article {\n      div {\n        gap: 1rem;\n        p {\n          font-size: 1.5rem;\n        }\n        span {\n          a {\n            font-size: 1.25rem;\n          }\n        }\n      }\n    }\n  }\n'])));function X(){return Object(h.jsxs)(U,{children:[Object(h.jsx)(I,{children:Object(h.jsx)("article",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"!tired"}),Object(h.jsx)("p",{children:"the perfect coffee for developers;"}),Object(h.jsx)("button",{type:"button",children:"order now"}),Object(h.jsx)("p",{children:"first bag with 20% discount!"})]})})}),Object(h.jsxs)(L,{children:[Object(h.jsx)("article",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"the best arabica coffee, from the best producers;"}),Object(h.jsx)("p",{children:"direct from Kenya;"}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"/",children:"Learn more"})})]})}),Object(h.jsx)(F.a,{mdDown:!0,children:Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"assets/kenya.png",alt:"Africa map pointing to Kenya"})})})]}),Object(h.jsx)(M,{children:Object(h.jsx)("article",{children:Object(h.jsx)(F.a,{lgUp:!0,children:Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"you can make your own coffee at home;"})})})})}),Object(h.jsx)(N,{children:Object(h.jsx)("article",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(F.a,{mdDown:!0,children:Object(h.jsx)("p",{className:"section4-hidden",children:"you can make your own coffee at home;"})}),Object(h.jsx)("p",{children:"or you can grab your cup at the nearby coffee shop;"}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"/",children:"check the nearby coffee shop"})})]})})})]})}var q=Object(d.a)(K||(K=Object(o.a)(["\n  :root {\n    --bg: #1f231e;\n    --highlight: #EBAE7D;\n  }\n  * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      font-family: 'Fira Code', monospace;\n      color: white;\n    }\n\n    html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n\n    body {\n      width: 100%;\n      ul {\n        list-style-type: none;\n      }\n      a{\n        text-decoration: none;\n        transition: color 0.2s;\n      }\n      a:hover, a:focus {\n        color: var(--highlight);\n      }\n      button {\n        cursor: pointer;\n      }\n    }\n  }\n"])));function G(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(J,{}),Object(h.jsx)(X,{}),Object(h.jsx)(m,{}),Object(h.jsx)(q,{})]})}s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.38ef96b7.chunk.js.map