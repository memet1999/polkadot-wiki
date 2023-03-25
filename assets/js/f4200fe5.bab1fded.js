"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>O,default:()=>R,frontMatter:()=>P,metadata:()=>D,toc:()=>A});var n=a(87462),o=a(63366),r=a(67294),l=a(3905),i=a(86010),s=a(12466),u=a(16550),p=a(91980),d=a(67392),c=a(50012);function m(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:m(a);return function(e){var t=(0,d.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function k(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,p._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,p=h(e),d=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!k({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:p})})),m=d[0],f=d[1],y=b({queryString:s,groupId:u}),g=y[0],N=y[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=v[0],T=v[1],C=function(){var e=null!=g?g:w;return k({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!k({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),N(e),T(e)}),[N,T,p]),tabValues:p}}var y=a(72389);const g="tabList__CuJ",N="tabItem_LNqP";function v(e){var t=e.className,a=e.block,o=e.selectedValue,l=e.selectValue,u=e.tabValues,p=[],d=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(d(t),l(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,o=p.indexOf(e.currentTarget)+1;a=null!=(n=p[o])?n:p[0];break;case"ArrowLeft":var r,l=p.indexOf(e.currentTarget)-1;a=null!=(r=p[l])?r:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",N,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function w(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function T(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function C(e){var t=(0,y.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}const x="tabItem_Ymn6";function S(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(x,n),hidden:a},t)}var I=["components"],P={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"},O=void 0,D={unversionedId:"maintain/maintain-sync",id:"maintain/maintain-sync",title:"Set up a Full Node",description:"Steps on how to set up a full node.",source:"@site/../docs/maintain/maintain-sync.md",sourceDirName:"maintain",slug:"/maintain-sync",permalink:"/docs/maintain-sync",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-sync.md",tags:[],version:"current",lastUpdatedBy:"alfarok",lastUpdatedAt:1671655542,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"},sidebar:"docs",previous:{title:"Node Endpoints",permalink:"/docs/maintain-endpoints"},next:{title:"Networks",permalink:"/docs/maintain-networks"}},E={},A=[{value:"Types of Nodes",id:"types-of-nodes",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Debian-based (Debian, Ubuntu)",id:"debian-based-debian-ubuntu",level:3},{value:"RPM-based (Fedora, CentOS)",id:"rpm-based-fedora-centos",level:3},{value:"Get Substrate",id:"get-substrate",level:2},{value:"Clone and Build",id:"clone-and-build",level:2},{value:"Run",id:"run",level:2},{value:"Running an Archive Node",id:"running-an-archive-node",level:2},{value:"Using Docker",id:"using-docker",level:2}],F={toc:A};function R(e){var t=e.components,a=(0,o.Z)(e,I);return(0,l.kt)("wrapper",(0,n.Z)({},F,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom\nSubstrate implementation, you probably want the ability to run a node-as-a-back-end. After all, it's\nalways better to rely on your own infrastructure than on a third-party-hosted one in this brave new\ndecentralized world."),(0,l.kt)("p",null,"This guide will show you how to connect to ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network"),", but the\nsame process applies to any other ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),"-based chain. First, let's\nclarify the term ",(0,l.kt)("em",{parentName:"p"},"full node"),"."),(0,l.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,l.kt)("p",null,"A blockchain's growth comes from a ",(0,l.kt)("em",{parentName:"p"},"genesis block"),", ",(0,l.kt)("em",{parentName:"p"},"extrinsics"),", and ",(0,l.kt)("em",{parentName:"p"},"events"),"."),(0,l.kt)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it, and emits the events that are the result of these changes. Later, the\nstate of the chain at block 1 is used in the same way to build the state of the chain at block 2,\nand so on. Once two thirds of the validators agree on a specific block being valid, it is finalized."),(0,l.kt)("p",null,"An ",(0,l.kt)("strong",{parentName:"p"},"archive node")," keeps all the past blocks and their states. An archive node makes it convenient\nto query the past state of the chain at any point in time. Finding out what an account's balance at\na certain block was, or which extrinsics resulted in a certain state change are fast operations when\nusing an archive node. However, an archive node takes up a lot of disk space - around Kusama's 12\nmillionth block this was around 660 GB."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("a",{parentName:"p",href:"https://paranodes.io/DBSize"},"Paranodes")," website lists the database sizes of Polkadot and Kusama\nnodes in real-time.")),(0,l.kt)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,l.kt)("a",{parentName:"p",href:"https://polkassembly.io"},"Polkassembly"),", and others. They need\nto be able to look at past on-chain data."),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"full node")," prunes historical states: all finalized blocks' states older than a configurable\nnumber except the genesis block's state. This is 256 blocks from the last finalized one, by default.\nA node that is pruned this way requires much less space than an archive node."),(0,l.kt)("p",null,"A full node may eventually be able to rebuild every block's state with no additional information,\nand become an archive node, but at the time of writing, this is not implemented. If you need to\nquery historical blocks' states past what you pruned, you need to purge your database and resync\nyour node starting in archive mode. Alternatively you can use a backup or snapshot of a trusted\nsource to avoid needing to sync from genesis with the network, and only need the states of blocks\npast that snapshot."),(0,l.kt)("p",null,"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."),(0,l.kt)("p",null,"Another type of node is a ",(0,l.kt)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state,\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource restricted devices. An interesting use-case of\nlight nodes is a browser extension, which is a node in its own right, running the runtime in WASM\nformat as well as a full or light node that is completely encapsulated in WASM and can be integrated\ninto webapps: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot#wasm-light-node"},"https://github.com/paritytech/smoldot#wasm-light-node")),(0,l.kt)("admonition",{title:"Substrate Connect",type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-connect"},"Substrate Connect")," provides a way to interact with\nsubstrate based blockchains in the browser without using an RPC server. It is a light node that runs\nentirely in Javascript. Substrate Connect uses a\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot"},"smoldot WASM light client")," to securely connect to the\nblockchain network without relying on specific 3rd parties. Substrate Connect is available as a\n",(0,l.kt)("a",{parentName:"p",href:"https://substrate.io/developers/substrate-connect/"},"browser extension")," on both Chrome and Firefox.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,l.kt)("p",null,"This is not recommended if you're a validator. Please see the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure validator setup")," if you are running validator."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The bash commands that are provided to run against ",(0,l.kt)("strong",{parentName:"mdxAdmonitionTitle"},"your node")," use ",(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Polkadot")," as the"),(0,l.kt)("p",{parentName:"admonition"},"default chain"),(0,l.kt)("p",{parentName:"admonition"},"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain")," flag if you are following the setup instructions to setup a ",(0,l.kt)("inlineCode",{parentName:"p"},"Kusama")," node. For\nexample:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n'))),(0,l.kt)(C,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux (standalone)",value:"linux-standalone"},{label:"Linux (package)",value:"linux-package"}],mdxType:"Tabs"},(0,l.kt)(S,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Homebrew within the terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openssl cmake llvm\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Rust in your terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Once Rust is installed, run the following command to clone and build the polkadot code:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,l.kt)(S,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Ubuntu")," (same webpage).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Determine the latest version of the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,l.kt)(S,{value:"linux-standalone",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Determine the latest version of the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),"."),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The nature of pre-built binaries means that they may not work on your particular architecture or\nLinux distribution. If you see an error like ",(0,l.kt)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error")," it\nlikely means the binary is not compatible with your system. You will either need to compile the\n",(0,l.kt)("a",{parentName:"p",href:"#clone-and-build"},(0,l.kt)("strong",{parentName:"a"},"source code"))," or use ",(0,l.kt)("a",{parentName:"p",href:"#using-docker"},(0,l.kt)("strong",{parentName:"a"},"Docker")),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following: ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo chmod +x polkadot"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,l.kt)(S,{value:"linux-package",mdxType:"TabItem"},(0,l.kt)("p",null,"You can also install Polkadot from one of our package repositories."),(0,l.kt)("p",null,"Installation from the Debian or rpm repositories will create a ",(0,l.kt)("inlineCode",{parentName:"p"},"systemd")," service that can be used to\nrun a Polkadot node. The service is disabled by default, and can be started by running\n",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl start polkadot")," on demand (use ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl enable polkadot")," to make it auto-start after\nreboot). By default, it will run as the ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot")," user. Command-line flags passed to the binary can\nbe customized by editing ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/default/polkadot"),". This file will not be overwritten on updating\npolkadot."),(0,l.kt)("h3",{id:"debian-based-debian-ubuntu"},"Debian-based (Debian, Ubuntu)"),(0,l.kt)("p",null,"Currently supports Debian 10 (Buster) and Ubuntu 20.04 (Focal), and derivatives. Run the following\ncommands as the ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Import the security@parity.io GPG key\ngpg --recv-keys --keyserver hkps://keys.mailvelope.com 9D4B2B6EB8F97156D19669A9FF0812D491B96798\ngpg --export 9D4B2B6EB8F97156D19669A9FF0812D491B96798 > /usr/share/keyrings/parity.gpg\n# Add the Parity repository and update the package index\necho 'deb [signed-by=/usr/share/keyrings/parity.gpg] https://releases.parity.io/deb release main' > /etc/apt/sources.list.d/parity.list\napt update\n# Install the `parity-keyring` package - This will ensure the GPG key\n# used by APT remains up-to-date\napt install parity-keyring\n# Install polkadot\napt install polkadot\n\n")),(0,l.kt)("p",null,"If you don't want polkadot package to be automatically updated when you update packages on your\nserver, you can issue the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-mark hold polkadot\n")),(0,l.kt)("h3",{id:"rpm-based-fedora-centos"},"RPM-based (Fedora, CentOS)"),(0,l.kt)("p",null,"Currently supports Fedora 32 and CentOS 8, and derivatives."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dnf-plugins-core (This might already be installed)\ndnf install dnf-plugins-core\n# Add the repository and enable it\ndnf config-manager --add-repo https://releases.parity.io/rpm/polkadot.repo\ndnf config-manager --set-enabled polkadot\n# Install polkadot (You may have to confirm the import of the GPG key, which\n# should have the following fingerprint: 9D4B2B6EB8F97156D19669A9FF0812D491B96798)\ndnf install polkadot\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you choose to use a custom folder for the polkadot home by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"--base-path '/custom-path'"),",\nyou will need to issue following command:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/systemd/system/polkadot.service.d\n")),(0,l.kt)("p",{parentName:"admonition"},"And create a new file inside this folder:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -e /etc/systemd/system/polkadot.service.d/custom.conf\n")),(0,l.kt)("p",{parentName:"admonition"},"With the following content:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"[Service]\nReadWritePaths=/custom-path\n")),(0,l.kt)("p",{parentName:"admonition"},"And finally issue a reload to have your modifications applied by systemd:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\n"))))),(0,l.kt)("h2",{id:"get-substrate"},"Get Substrate"),(0,l.kt)("p",null,"Follow instructions as outlined ",(0,l.kt)("a",{parentName:"p",href:"https://docs.substrate.io/quick-start/"},"here")," - note that Windows\nusers will have their work cut out for them. It's better to use a virtual machine instead."),(0,l.kt)("p",null,"Test if the installation was successful by running ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,l.kt)("h2",{id:"clone-and-build"},"Clone and Build"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"paritytech/polkadot")," repo's master branch contains the\nlatest Polkadot code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\ngit checkout tags/v0.8.3\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("p",null,"The built binary will be in the ",(0,l.kt)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," flag to find out which flags you can use when running the node. For example, if\n",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-wss"},"connecting to your node remotely"),", you'll probably want to use ",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,l.kt)("p",null,"The syncing process will take a while depending on your bandwidth, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,l.kt)("p",null,"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,l.kt)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,l.kt)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. When\nvalidating, it defaults to ",(0,l.kt)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode"),". To keep the full state use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive\n')),(0,l.kt)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,l.kt)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node is in sync."),(0,l.kt)("h2",{id:"using-docker"},"Using Docker"),(0,l.kt)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is a bit more advanced so\nit's best left up to those that either already have familiarity with docker, or have completed the\nother set-up instructions in this guide. Be aware that when you run polkadot in docker the process\nonly listen on localhost by default. If you would like to connect to your node's services (rpc,\nwebsockets, and prometheus) you need to ensure that you run you node with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-external"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 -p 9615:9615 parity/polkadot:v0.9.13 --name "calling_home_from_a_docker_container" --rpc-external --ws-external --prometheus-external\n')))}R.isMDXComponent=!0}}]);