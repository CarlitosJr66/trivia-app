import{o as a,c as i,t as p,n as _,r as u,u as m,a as w,b as r,w as x,B as y,d as c,F as b,e as C,f as T,_ as k,g as M,h as R}from"./index-43fcb32f.js";const L={__name:"DifficultyChip",props:{difficulty:{type:String,required:!0}},setup(d){const l=d;return(t,f)=>(a(),i("p",{class:_(["px-4 py-2 rounded-full border absolute uppercase text-white bottom-5 left-8 text-2xl font-bold",l.difficulty==="easy"?"bg-green-600":l.difficulty==="medium"?"bg-yellow-600":"bg-red-600"])},p(l.difficulty),3))}},B={key:0,class:"flex h-full w-full flex-col items-center gap-8 p-10"},E=["innerHTML"],H={class:"grid w-full flew-grow grid-cols-2 gap-8"},N=["innerHTML","onClick"],S={key:1,class:""},V={__name:"QuestionPage",setup(d){const l=T(),t=u(null),f=m();u([]);const{changeScore:v}=useScore(),o=u("");w(async()=>{t.value=await l.getQuestion(f.params.id),answers.value.push({id:answers.value.length,correct:!0,answer:t.value.correct_answer,points:t.value.difficulty==="easy"?10:t.value.difficulty==="medium"?20:30}),t.value.incorrect_answers.map(e=>{answers.value.push({id:answers.value.length,correct:!1,answer:e,points:-5})}),answers.value=g(answers.value)});const g=e=>{for(let s=e.length-1;s>0;s--){const n=Math.floor(Math.random()*(s+1));[e[s],e[n]]=[e[n],e[s]]}return e},h=e=>{v(e),e>0?o.value="CORRECT":o.value="INCORRECT",setTimeout(()=>{R.push("/trivia-app/")},1e3)};return(e,s)=>t.value?(a(),i("div",B,[r(y,null,{default:x(()=>[r(k),M("   "),c("span",{class:_(["font-bold",o.value==="CORRECT"?"text-green-500":"text-red-500"])},p(o.value),3)]),_:1}),c("div",{innerHTML:t.value.question,class:"text-center text-2xl font-bold"},null,8,E),c("div",H,[(a(!0),i(b,null,C(e.answers,n=>(a(),i("div",{innerHTML:n.answer,key:n.id,onClick:q=>h(n.points),class:"bg-green-500 flex items-center justify-center text-4xl rounded-lg text-white py-10 px-2"},null,8,N))),128))]),r(L,{difficulty:t.value.difficulty},null,8,["difficulty"])])):(a(),i("div",S," Loading... "))}};export{V as default};