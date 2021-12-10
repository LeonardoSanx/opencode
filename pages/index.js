import Head from "next/head";
import CodeBlock from "../components/codeBlock";
import CodeNav from "../components/codeNav";
import CodeSingle from "../components/codeSinglePage";
import Navbar from "../components/navbar";
import Water from "../components/water";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { ImPhone, ImLocation, ImMic } from "react-icons/im";

function Home() {
  const themes = ["theme-green", "theme-gray", "theme-blue"];
  const [selectedTheme, setselectedTheme] = useState(themes[0]);

  const copy = (str) => {
    navigator.clipboard.writeText(str);
  };

  return (
    <div className="">
      <Head>
        <title>
          Opencode - Componentes, configurações e códigos explícitos com
          Tailwind.
        </title>
        <link rel="icon" href="../images/Computer_perspective_matte.png" />
        <meta
          name="description"
          content="Functionalidades, componentes, configurações, códigos explícitos e prontos para uso, navbar, google fonts, custom theme, react-icons"
        />
        <meta name="author" content="Leonardo Machado" />
        <meta
          name="twitter:title"
          content="Opencode - Componentes, configurações e códigos explícitos com Tailwind."
        />
        <meta
          name="twitter:description"
          content="Funcionalidades criadas com tailwind para mais fácil entendimento e prontas para uso em qualquer design responsivo."
        />
        <meta name="twitter:image" content="../images/twitter.png" />
        <meta
          name="image"
          property="og:image"
          content="../images/twitter.png"
          alt="Opencode intro image"
        />
        <meta
          name="og:title"
          content="Opencode - Componentes, configurações e códigos explícitos com Tailwind."
        />
        <meta
          name="og:description"
          content="Funcionalidades criadas com tailwind para mais fácil entendimento e prontas para uso em qualquer design responsivo."
        />
        <meta name="og:url" content="https://dev-opencode.vercel.app/" />
        <meta name="og:type" content="article" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col w-full items-center content-center justify-center min-h-screen">
        <section className="relative w-full py-28 overflow-hidden justify-center">
          <div className="max-w-7xl z-50 mx-auto pb-10 px-6 sm:px-10">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
              <motion.div
                animate={{
                  color: [
                    "rgba(0,0,0,0)",
                    "rgba(0,0,0,0)",
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 8,
                  times: [
                    0,
                    0.85 / 3,
                    0.85 / 3 + 0.05,
                    (2 * 0.85) / 3 + 0.05,
                    2 * (0.85 / 3 + 0.05),
                    (3 * 0.85) / 3 + 2 * 0.05,
                    1,
                  ],
                  repeat: Infinity,
                }}
                className="inline-block pb-2 sm:pb-4 bg-clip-text bg-gradient-to-r from-blue-600 to-green-400"
              >
                Componentes,
              </motion.div>{" "}
              <motion.div
                animate={{
                  color: [
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(0,0,0,0)",
                    "rgba(0,0,0,0)",
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                  ],
                }}
                transition={{
                  duration: 8,
                  times: [
                    0,
                    0.85 / 3,
                    0.85 / 3 + 0.05,
                    (2 * 0.85) / 3 + 0.05,
                    2 * (0.85 / 3 + 0.05),
                    (3 * 0.85) / 3 + 2 * 0.05,
                    1,
                  ],
                  repeat: Infinity,
                }}
                className="inline-block pb-2 sm:pb-4 bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600"
              >
                configurações
              </motion.div>{" "}
              e{" "}
              <motion.div
                animate={{
                  color: [
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(17, 24, 39,1)",
                    "rgba(0,0,0,0)",
                    "rgba(0,0,0,0)",
                    "rgba(17, 24, 39,1)",
                  ],
                }}
                transition={{
                  duration: 8,
                  times: [
                    0,
                    0.85 / 3,
                    0.85 / 3 + 0.05,
                    (2 * 0.85) / 3 + 0.05,
                    2 * (0.85 / 3 + 0.05),
                    (3 * 0.85) / 3 + 2 * 0.05,
                    1,
                  ],
                  repeat: Infinity,
                }}
                className="inline-block pb-2 sm:pb-4 bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400"
              >
                códigos
              </motion.div>{" "}
              explícitos com Tailwind.
            </h1>
            <p className="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">
              Criado para mais
              <span className="text-yellow-400"> fácil entendimento </span>e
              <span className="text-yellow-400"> pronto para uso </span>
              em qualquer design responsivo.
            </p>
            <div className="flex flex-wrap">
              <a
                href="https://tailwindcss.com/"
                rel="noopener"
                target="_blank"
                className="w-full sm:w-auto flex-none text-center bg-gradient-to-br from-blue-300 to-blue-700 text-gray-800 hover:text-white text-base sm:text-lg leading-6 font-semibold py-2 sm:py-3 px-6 rounded-xl shadow-lg duration-100"
              >
                Site oficial
              </a>
            </div>
          </div>
        </section>

        <section className="w-full pb-40 overflow-hidden">
          <div>
            <motion.h1
              initial={{ y: "200", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-12 mb-8 sm:mt-14 sm:mb-10"
            >
              Navbar Responsiva
            </motion.h1>
            <Navbar />
          </div>
          <CodeNav
            from={"from-green-600"}
            to={"to-green-300"}
            cardContent={
              <div className="animate-bounce-slow h-32 sm:h-36 md:h-52 flex -mb-6 mt-8 justify-center">
                <img
                  src="../../images/List_perspective_matte_2.png"
                  alt="3D laptop icon"
                  className="h-full mr-2"
                />
              </div>
            }
            background={"bg-green-800"}
            navContent={[
              { id: 0, name: "index.js" },
              { id: 1, name: "mobile.js" },
            ]}
            codeContent={[
              {
                id: 0,
                count: [
                  <div className="pb-2">
                    <span className="block">1</span>
                    <span className="block">2</span>
                    <span className="block">3</span>
                    <span className="block">4</span>
                    <span className="block">5</span>
                    <span className="block">6</span>
                    <span className="block">7</span>
                    <span className="block">8</span>
                    <span className="block">9</span>
                    <span className="block">10</span>
                    <span className="block">11</span>
                    <span className="block">12</span>
                    <span className="block">13</span>
                    <span className="block">14</span>
                    <span className="block">15</span>
                    <span className="block">16</span>
                    <span className="block">17</span>
                    <span className="block">18</span>
                    <span className="block">19</span>
                    <span className="block">21</span>
                    <span className="block">22</span>
                    <span className="block">23</span>
                    <span className="block">24</span>
                    <span className="block">25</span>
                    <span className="block">26</span>
                    <span className="block">27</span>
                    <span className="block">28</span>
                    <span className="block">29</span>
                    <span className="block">30</span>
                    <span className="block">31</span>
                    <span className="block">32</span>
                    <span className="block">33</span>
                    <span className="block">34</span>
                    <span className="block">35</span>
                    <span className="block">36</span>
                    <span className="block">37</span>
                  </div>,
                ],
                code: [
                  <code className="flex-auto relative block pt-2 mb-1 pl-2 ml-2 mr-2 overflow-x-auto scroll">
                    <span className="text-fuchsia-400 block text-left">
                      import
                      <span className="text-neutral-100">{" { "}</span>
                      <span className="text-sky-300">useState</span>
                      <span className="text-neutral-100">{" } "}</span>
                      from
                      <span className="text-red-400"> "react"</span>
                      <span className="text-neutral-100">{";"}</span>
                    </span>

                    <span className="text-fuchsia-400 block text-left">
                      import
                      <span className="text-sky-300"> Mobile </span>
                      from
                      <span className="text-red-400"> "./mobile"</span>
                      <span className="text-neutral-100">{";"}</span>
                    </span>

                    <span className="text-fuchsia-400 block text-left">
                      import
                      <span className="text-neutral-100">{" { "}</span>
                      <span className="text-sky-300">BiMenu, Bix</span>
                      <span className="text-neutral-100">{" } "}</span>
                      from
                      <span className="text-red-400"> "react-icons/bi"</span>
                      <span className="text-neutral-100">{";"}</span>
                    </span>

                    <span className="text-blue-500 block text-left"> </span>

                    <span className="text-fuchsia-400 block text-left">
                      export default
                      <span className="text-blue-500"> function </span>
                      <span className="text-yellow-200">Navbar</span>
                      <span className="text-neutral-100">{"() {"}</span>
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      <span className="text-blue-500">const </span>[
                      <span className="text-blue-500">navPosition</span>,
                      <span className="text-yellow-200"> setnavPosition</span>]
                      = <span className="text-yellow-200">useState</span>(
                      <span className="text-red-400">"-top-full"</span>
                      );
                    </span>

                    <span className="text-fuchsia-400 block text-left">
                      {"  "}
                      return <span className="text-neutral-100"> (</span>
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">""</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-emerald-400">Mobile </span>
                      <span className="text-sky-300">navPosition</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-blue-500">{"{navPosition}"}</span>
                      {" />"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "sticky top-0 left-0 w-full z-30 bg-white shadow-lg
                        justify-center"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "max-w-6xl z-50 mx-auto px-10"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "flex items-center justify-between h-16 sm:h-20"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">a </span>
                      <span className="text-sky-300">href</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">"/"</span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 text-opacity-80 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"{!-- Logo --}"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">a</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">nav </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "hidden md:flex md:flex-grow"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">ul </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "flex flex-grow justify-end flex-wrap items-center"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 text-opacity-80 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"{!-- Links --}"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">ul</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">nav</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "flex-col w-5 md:hidden cursor-pointer text-2xl
                        sm:text-3xl transition-all duration-500"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">onClick</span>=
                      <span className="text-blue-500">{"{"}</span>
                      ()
                      <span className="text-blue-500">{" => "}</span>
                      {"{"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-blue-500">navPosition </span>
                      ==
                      <span className="text-red-400"> "top-0"</span>
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"? "}
                      <span className="text-yellow-200">setnavPosition</span>(
                      <span className="text-red-400">"-top-full"</span>)
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {": "}
                      <span className="text-yellow-200">setnavPosition</span>(
                      <span className="text-red-400">"-top-0"</span>
                      );
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"}"}
                      <span className="text-blue-500">{"}"}</span>
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-blue-500">{"{navPosition"}</span>
                      <span className="text-neutral-100"> == </span>
                      <span className="text-red-400">"top-0"</span>
                      <span className="text-neutral-100"> ? </span>
                      {"<"}
                      <span className="text-emerald-400">BiX</span>
                      {" />"}
                      <span className="text-neutral-100"> : </span>
                      {"<"}
                      <span className="text-emerald-400">BiMenu</span>
                      {" />"}
                      <span className="text-blue-500">{"}"}</span>
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      );
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"}"}
                    </span>
                  </code>,
                ],
              },
              {
                id: 1,
                count: [
                  <div className="pb-2">
                    <span className="block">1</span>
                    <span className="block">2</span>
                    <span className="block">3</span>
                    <span className="block">4</span>
                    <span className="block">5</span>
                    <span className="block">6</span>
                    <span className="block">7</span>
                    <span className="block">8</span>
                    <span className="block">9</span>
                    <span className="block">10</span>
                    <span className="block">11</span>
                    <span className="block">12</span>
                    <span className="block">13</span>
                    <span className="block">14</span>
                  </div>,
                ],
                code: [
                  <code className="flex-auto relative block pt-2 mb-1 pl-2 ml-2 mr-2 overflow-x-auto scroll">
                    <span className="text-fuchsia-400 block text-left">
                      export default
                      <span className="text-blue-500"> function </span>
                      <span className="text-yellow-200">Mobile</span>
                      <span className="text-neutral-100">{"() {"}</span>
                    </span>

                    <span className="text-fuchsia-400 block text-left">
                      {"  "}
                      return <span className="text-neutral-100"> (</span>
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                    </span>

                    <span className="text-sky-300 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      className
                      <span className="text-neutral-100">=</span>
                      <span className="text-blue-500">
                        {"{"}
                        <span className="text-red-400">`absolute</span>
                        {" %{"}
                        <span className="text-sky-300">navPosition</span>
                        {"} "}
                        <span className="text-red-400">
                          w-full z-30 bg-white pb-2 mt-24 md:hidden
                          transition-all duration-500`
                        </span>
                        {"}"}
                      </span>
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">nav </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">"w-full"</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">ul </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "flex justify-end flex-wrap items-center"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 text-opacity-80 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"{!-- Links --}"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">ul</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">nav</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      );
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"}"}
                    </span>
                  </code>,
                ],
              },
            ]}
          />
        </section>

        <section className="w-full pb-40 overflow-hidden">
          <motion.h1
            initial={{ y: "200", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10"
          >
            Google Fonts
          </motion.h1>
          <CodeBlock
            from={"from-blue-600"}
            to={"to-blue-300"}
            cardContent={
              <div className="font-caveat">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold pb-4">
                  Caveat
                </h2>
                <ol className="list-decimal">
                  <li>Escolha as fontes e estilos no Google fonts</li>
                  <li>
                    Copie o que estiver na aba{" "}
                    <span className="">{"<link>"}</span>
                  </li>
                  <li>
                    Cole dentro da tag <span>{"<Head>"}</span>
                  </li>
                  <li>Copie a regra do CSS</li>
                  <li>Em tailwind.config crie o object 'fontFamily' </li>
                  <li>Defina o nome da fonte que será usada </li>
                  <li>Cole a regra do CSS entre " "</li>
                  <li>utilize a fonte escrevendo "font-(nome-da-font)"</li>
                </ol>
              </div>
            }
            background={"bg-blue-900"}
            pageOne="Index.js"
            pageTwo="tailwind.config.js"
            countOne={
              <div className="pb-2">
                <span className="block">1</span>
                <span className="block">2</span>
                <span className="block">3</span>
                <span className="block">4</span>
                <span className="block">5</span>
                <span className="block">6</span>
                <span className="block">7</span>
                <span className="block">8</span>
                <span className="block">9</span>
              </div>
            }
            codeOne={
              <code className="flex-auto relative block pt-4 mb-1 pl-2 ml-2 mr-2 overflow-auto scroll">
                <span className="text-emerald-400 block text-left">
                  <span className="text-neutral-500">{"<"}</span>
                  Head
                  <span className="text-neutral-500">{">"}</span>
                </span>

                <span className="text-blue-500 block text-left">
                  {"  "}
                  <span className="text-neutral-500">{"<"}</span>
                  link{" "}
                  <span className="text-sky-300">
                    rel
                    <span className="text-neutral-100">=</span>
                    <span className="text-red-400">"preconnect" </span>
                  </span>
                  <span className="text-sky-300">
                    href
                    <span className="text-neutral-100">=</span>
                    <span className="text-red-400">
                      "https://fonts.googleapis.com"{" "}
                    </span>
                  </span>
                  <span className="text-neutral-500">{"/>"}</span>
                </span>

                <span className="text-blue-500 block text-left">
                  {"  "}
                  <span className="text-neutral-500">{"<"}</span>
                  link{" "}
                  <span className="text-sky-300">
                    rel
                    <span className="text-neutral-100">=</span>
                    <span className="text-red-400">"preconnect" </span>
                  </span>
                  <span className="text-sky-300">
                    href
                    <span className="text-neutral-100">=</span>
                    <span className="text-red-400">
                      "https://fonts.gstatic.com"{" "}
                    </span>
                  </span>
                  <span className="text-sky-300">crossorigin </span>
                  <span className="text-neutral-500">{"/>"}</span>
                </span>

                <span className="text-blue-500 block text-left">
                  {"  "}
                  <span className="text-neutral-500">{"<"}</span>
                  link
                </span>

                <span className="text-sky-300 block text-left">
                  {"  "}
                  {"  "}
                  href
                  <span className="text-neutral-100">=</span>
                  <span className="text-red-400">
                    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                  </span>
                </span>

                <span className="text-sky-300 block text-left">
                  {"  "}
                  {"  "}
                  rel
                  <span className="text-neutral-100">=</span>
                  <span className="text-red-400">"stylesheet" </span>
                </span>

                <span className="text-neutral-500 block text-left">
                  {"  "}
                  {"/>"}
                </span>

                <span className="text-emerald-400 block text-left">
                  <span className="text-neutral-500">{"<"}\</span>
                  Head
                  <span className="text-neutral-500">{">"}</span>
                </span>
              </code>
            }
            countTwo={
              <div className="pb-2">
                <span className="block">1</span>
                <span className="block">2</span>
                <span className="block">3</span>
                <span className="block">4</span>
                <span className="block">5</span>
                <span className="block">6</span>
                <span className="block">7</span>
                <span className="block">8</span>
                <span className="block">9</span>
                <span className="block">10</span>
              </div>
            }
            codeTwo={
              <code className="flex-auto relative text-neutral-100 block pt-4 mb-1 pl-2 ml-2 mr-2 overflow-auto scroll">
                <span className="text-emerald-400 block text-left">
                  module
                  <span className="text-neutral-100">{"."}</span>
                  exports
                  <span className="text-neutral-100">{" = "}</span>
                  <span className="text-neutral-100">{"{"}</span>
                </span>

                <span className="text-sky-300 block text-left">
                  {"  "}
                  theme:
                  <span className="text-neutral-100">{" {"}</span>
                </span>

                <span className="text-sky-300 block text-left">
                  {"  "}
                  {"  "}
                  extend:
                  <span className="text-neutral-100">{" {"}</span>
                </span>

                <span className="text-sky-300 block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  fontFamily:
                  <span className="text-neutral-100">{" {"}</span>
                </span>

                <span className="text-sky-300 block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"  "}
                  caveat:{" "}
                  <span className="text-red-400">"'Caveat', cursive"</span>
                  <span className="text-neutral-100">,</span>
                </span>

                <span className="block text-neutral-100 text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"},"}
                </span>

                <span className="block text-neutral-100 text-left">
                  {"  "}
                  {"  "}
                  {"},"}
                </span>

                <span className="block text-neutral-100 text-left">
                  {"  "}
                  {"},"}
                </span>

                <span className="block text-neutral-100 text-left">{"};"}</span>
              </code>
            }
          />
        </section>

        <section className="w-full pb-40 overflow-hidden">
          <motion.h1
            initial={{ y: "200", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-12 mb-8 sm:mt-14 sm:mb-10"
          >
            Custom Themes
          </motion.h1>
          <CodeNav
            from={"from-yellow-600"}
            to={"to-yellow-300"}
            cardContent={
              <div>
                <ul className="list-none flex flex-row flex-wrap w-auto bg-gradient-to-tr from-yellow-500 to-yellow-400 rounded-lg justify-center">
                  {themes.map((theme) => (
                    <li
                      key={theme}
                      className={`${theme} bg-card-card relative block w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full m-2 sm:m-3 md:m-4 cursor-pointer flex-shrink-0`}
                      onClick={() => setselectedTheme(theme)}
                    >
                      {selectedTheme === theme && (
                        <motion.div
                          layoutId="circle"
                          className="absolute -top-1 -left-1 -right-1 -bottom-1 border-2 
                          sm:-top-2 sm:-left-2 sm:-right-2 sm:-bottom-2
                          md:-top-3 md:-left-3 md:-right-3 md:-bottom-3
                          border-borderColorCard rounded-full"
                          initial={false}
                          animate={{ borderColor: "bg-card-card" }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                          }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    key={selectedTheme}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`${selectedTheme} max-h-72 mt-4`}>
                      <div className="flex w-full h-auto text-card-text text-sm sm:text-base bg-card-card rounded-xl">
                        <img
                          src="../images/plant.jpg"
                          alt="imagem de planta"
                          className="w-2/5 object-cover rounded-l-xl"
                        />
                        <div className="w-3/5 p-4">
                          <h1 className="text-card-title font-bold text-xl">
                            Lorem, ipsum dolor.
                          </h1>
                          <p className="mt-2 mb-4">
                            amet consectetur adipisicing elit. Voluptate, quia?
                          </p>
                          <div className="flex justify-end cursor-pointer">
                            <p className="text-center inline-block bg-card-contrast rounded-xl sm:rounded-full py-1 px-3">
                              Read more
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            }
            background={"bg-yellow-900"}
            navContent={[
              { id: 0, name: "global.css" },
              { id: 1, name: "tailwind.config.js" },
              { id: 2, name: "index.js" },
            ]}
            codeContent={[
              {
                id: 0,
                count: [
                  <div className="pb-2">
                    <span className="block">1</span>
                    <span className="block">2</span>
                    <span className="block">3</span>
                    <span className="block">4</span>
                    <span className="block">5</span>
                    <span className="block">6</span>
                    <span className="block">7</span>
                    <span className="block">8</span>
                    <span className="block">9</span>
                    <span className="block">10</span>
                    <span className="block">11</span>
                    <span className="block">12</span>
                    <span className="block">13</span>
                    <span className="block">14</span>
                    <span className="block">15</span>
                    <span className="block">16</span>
                    <span className="block">17</span>
                    <span className="block">18</span>
                    <span className="block">19</span>
                    <span className="block">21</span>
                    <span className="block">22</span>
                    <span className="block">23</span>
                    <span className="block">24</span>
                    <span className="block">25</span>
                    <span className="block">26</span>
                  </div>,
                ],
                code: [
                  <code className="flex-auto relative block pt-2 mb-1 pl-2 ml-2 mr-2 overflow-x-auto scroll">
                    <span className="text-fuchsia-400 block text-left">
                      @tailwind
                      <span className="text-sky-300"> base;</span>
                    </span>

                    <span className="text-fuchsia-400 block text-left">
                      @tailwind
                      <span className="text-sky-300"> components;</span>
                    </span>

                    <span className="text-fuchsia-400 block text-left">
                      @tailwind
                      <span className="text-sky-300"> utilities;</span>
                    </span>

                    <span className="text-blue-500 block text-left"> </span>

                    <span className="text-fuchsia-400 block text-left">
                      @layer
                      <span className="text-sky-300"> base</span>
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-yellow-200 block text-left">
                      {"  "}
                      .theme-green
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-card</span>: 216,
                      228, 200;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-title</span>: 21,
                      27, 13;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-card-text</span>:
                      43, 55, 27;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-contrast</span>:
                      177, 201, 146;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  }"}
                    </span>

                    <span className="text-yellow-200 block text-left">
                      {"  "}
                      .theme-gray
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-card</span>: 32,
                      28, 33;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-title</span>: 226,
                      222, 227;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-card-text</span>:
                      187, 178, 189;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-contrast</span>:
                      54, 47, 55;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  }"}
                    </span>

                    <span className="text-yellow-200 block text-left">
                      {"  "}
                      .theme-blue
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-card</span>: 0,
                      110, 144;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-title</span>: 194,
                      241, 255;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-card-text</span>:
                      10, 198, 255;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">--color-contrast</span>: 0,
                      63, 82;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  }"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"}"}
                    </span>
                  </code>,
                ],
              },
              {
                id: 1,
                count: [
                  <div className="pb-2">
                    <span className="block">1</span>
                    <span className="block">2</span>
                    <span className="block">3</span>
                    <span className="block">4</span>
                    <span className="block">5</span>
                    <span className="block">6</span>
                    <span className="block">7</span>
                    <span className="block">8</span>
                    <span className="block">9</span>
                    <span className="block">10</span>
                    <span className="block">11</span>
                    <span className="block">12</span>
                    <span className="block">13</span>
                    <span className="block">14</span>
                    <span className="block">15</span>
                    <span className="block">16</span>
                    <span className="block">17</span>
                    <span className="block">18</span>
                    <span className="block">19</span>
                    <span className="block">21</span>
                    <span className="block">22</span>
                    <span className="block">23</span>
                    <span className="block">24</span>
                    <span className="block">25</span>
                    <span className="block">26</span>
                    <span className="block">27</span>
                    <span className="block">28</span>
                    <span className="block">29</span>
                  </div>,
                ],
                code: [
                  <code className="flex-auto relative block pt-2 mb-1 pl-2 ml-2 mr-2 overflow-x-auto scroll">
                    <span className="text-neutral-100 block text-left">
                      <span className="text-blue-500">function </span>
                      <span className="text-yellow-200">withOpacity</span>(
                      <span className="text-sky-300">variableName</span>
                      {") {"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      <span className="text-fuchsia-400">return</span>
                      {" ({ "}
                      <span className="text-sky-300">opacityValue</span>
                      {" )} "}
                      <span className="text-blue-500">{"=>"}</span>
                      {" {"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-fuchsia-400">if</span>
                      {" ("}
                      <span className="text-sky-300">opacityValue </span>
                      ==
                      <span className="text-blue-500"> undefined</span>
                      {") {"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-sky-300">opacityValue </span>
                      == 1;
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  }"}
                    </span>

                    <span className="text-neutral-100 block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-fuchsia-400">return</span>
                      {" ({ "}
                      <span className="text-red-400">
                        `rgba(var(
                        <span className="text-blue-500">
                          {"${"}
                          <span className="text-sky-300">variableName</span>
                          {"}"}
                        </span>
                        ),
                        <span className="text-blue-500">
                          {"${"}
                          <span className="text-sky-300">opacityValue</span>
                          {"}"}
                        </span>
                        )`
                      </span>
                      ;
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"};"}
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"}"}
                    </span>

                    <span className="text-blue-500 block text-left"> </span>
                    <span className="text-blue-500 block text-left"> </span>

                    <span className="text-emerald-400 block text-left">
                      module
                      <span className="text-neutral-100">{"."}</span>
                      exports
                      <span className="text-neutral-100">{" = "}</span>
                      <span className="text-neutral-100">{"{"}</span>
                    </span>

                    <span className="text-sky-300 block text-left">
                      {"  "}
                      theme:
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-sky-300 block text-left">
                      {"  "}
                      {"  "}
                      extend:
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-sky-300 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      textColor:
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-sky-300 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      card:
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-yellow-200">title</span>
                      <span className="text-sky-300">: </span>
                      <span className="text-yellow-200">withOpacity</span>(
                      <span className="text-red-400">"--color-title"</span>
                      ),
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-yellow-200">text</span>
                      <span className="text-sky-300">: </span>
                      <span className="text-yellow-200">withOpacity</span>(
                      <span className="text-red-400">"--color-card-text"</span>
                      ),
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="text-sky-300 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      backgroundColor:
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="text-sky-300 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      card:
                      <span className="text-neutral-100">{" {"}</span>
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-yellow-200">card</span>
                      <span className="text-sky-300">: </span>
                      <span className="text-yellow-200">withOpacity</span>(
                      <span className="text-red-400">"--color-card"</span>
                      ),
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-yellow-200">contrast</span>
                      <span className="text-sky-300">: </span>
                      <span className="text-yellow-200">withOpacity</span>(
                      <span className="text-red-400">"--color-contrast"</span>
                      ),
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-neutral-100 text-left">
                      {"};"}
                    </span>
                  </code>,
                ],
              },
              {
                id: 2,
                count: [
                  <div className="pb-2">
                    <span className="block">1</span>
                    <span className="block">2</span>
                    <span className="block">3</span>
                    <span className="block">4</span>
                    <span className="block">5</span>
                    <span className="block">6</span>
                    <span className="block">7</span>
                    <span className="block">8</span>
                    <span className="block">9</span>
                    <span className="block">10</span>
                    <span className="block">11</span>
                    <span className="block">12</span>
                    <span className="block">13</span>
                    <span className="block">14</span>
                    <span className="block">15</span>
                    <span className="block">16</span>
                    <span className="block">17</span>
                    <span className="block">18</span>
                    <span className="block">19</span>
                    <span className="block">21</span>
                    <span className="block">22</span>
                    <span className="block">23</span>
                    <span className="block">24</span>
                    <span className="block">25</span>
                    <span className="block">26</span>
                    <span className="block">27</span>
                    <span className="block">28</span>
                    <span className="block">29</span>
                  </div>,
                ],
                code: [
                  <code className="flex-auto relative block pt-2 mb-1 pl-2 ml-2 mr-2 overflow-x-auto scroll">
                    <span className="text-fuchsia-400 block text-left text-opacity-40">
                      export default
                      <span className="text-blue-500 text-opacity-40">
                        {" "}
                        function{" "}
                      </span>
                      <span className="text-yellow-200 text-opacity-40">
                        Index
                      </span>
                      <span className="text-neutral-100 text-opacity-40">
                        {"() {"}
                      </span>
                    </span>

                    <span className="text-fuchsia-400 block text-opacity-40 text-left">
                      {"  "}
                      return{" "}
                      <span className="text-neutral-100 text-opacity-40">
                        {" "}
                        (
                      </span>
                    </span>

                    <span className="text-neutral-500 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500 text-opacity-40">
                        div{" "}
                      </span>
                      <span className="text-sky-300 text-opacity-40">
                        className
                      </span>
                      <span className="text-neutral-100 text-opacity-40">
                        =
                      </span>
                      <span className="text-red-400 text-opacity-40">
                        "w-full h-full max-h-screen"
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "flex
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          theme-green
                        </span>
                        relative
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          bg-card-card
                        </span>
                        "
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">h1 </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "w-full text-2xl
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          text-card-title
                        </span>
                        "
                      </span>
                      {">"}
                      <span className="text-neutral-100">Título</span>
                      {"</"}
                      <span className="text-blue-500">h1</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">p </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "text-base
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          text-card-text
                        </span>
                        "
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      algum texto
                    </span>

                    <span className="text-neutral-500 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500 text-opacity-40">p</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500 text-opacity-40">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">div </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "flex
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          theme-blue
                        </span>
                        relative
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          bg-card-card
                        </span>
                        "
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">h1 </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "w-full text-2xl
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          text-card-title
                        </span>
                        "
                      </span>
                      {">"}
                      <span className="text-neutral-100">Título</span>
                      {"</"}
                      <span className="text-blue-500">h1</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-blue-500">p </span>
                      <span className="text-sky-300">className</span>
                      <span className="text-neutral-100">=</span>
                      <span className="text-red-400">
                        "text-base
                        <span className="rounded-sm bg-white bg-opacity-10 px-1 mx-1">
                          text-card-text
                        </span>
                        "
                      </span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      algum texto
                    </span>

                    <span className="text-neutral-500 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500 text-opacity-40">p</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500 text-opacity-40">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-500 block text-left text-opacity-40">
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-blue-500 text-opacity-40">div</span>
                      {">"}
                    </span>

                    <span className="text-neutral-100 block text-left text-opacity-40">
                      {"  "}
                      );
                    </span>

                    <span className="text-neutral-100 block text-left text-opacity-40">
                      {"}"}
                    </span>
                  </code>,
                ],
              },
            ]}
          />
        </section>

        <section className=" w-full pb-40 overflow-hidden">
          <div className="max-w-7xl z-50 mx-auto px-6 sm:px-10">
            <motion.h1
              initial={{ y: "200", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10"
            >
              React-icons
            </motion.h1>

            <div className="sm:flex flex-wrap">
              <motion.a
                initial={{ y: "200", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                href="https://react-icons.github.io/react-icons/"
                rel="noopener"
                target="_blank"
                className="text-purple-800 w-full border-purple-800 border flex justify-center items-center cursor-pointer 
                text-sm sm:text-base leading-6 font-semibold py-2 px-6 mb-4 rounded-xl shadow-md duration-100
                sm:w-auto sm:py-3 sm:mb-6 sm:mr-3 sm:shadow-lg
                hover:text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-900"
              >
                Acesse o site
                <BsArrowRightShort className="flex ml-3 items-center text-lg sm:text-xl" />
              </motion.a>
              <motion.button
                initial={{ y: "200", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                type="button"
                onClick={() => copy("npm i react-icons")}
                className="text-gray-400 w-full border-gray-400 border flex justify-center items-center cursor-pointer 
                text-sm sm:text-base leading-6 font-semibold py-2 px-6 mb-4 rounded-xl shadow-md duration-200
                sm:w-auto sm:py-3 sm:mb-6 sm:mr-3 sm:shadow-lg
                hover:text-gray-900 focus:border-gray-900"
              >
                <span className="text-gray-900">$ npm i react-icons</span>
                <FiCopy className="flex ml-3 items-center text-lg sm:text-xl" />
              </motion.button>
            </div>
          </div>
          <CodeSingle
            from={"from-purple-600"}
            to={"to-purple-300"}
            cardContent={
              <div className="gap-6 grid grid-cols-3 grid-rows-3 justify-center items-center">
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <AiOutlineHome />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <AiOutlineUser />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <AiOutlineMail />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <TiSocialLinkedin />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <TiSocialTwitter />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <TiSocialInstagram />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <ImPhone />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <ImLocation />
                </motion.div>
                <motion.div
                  initial={{ y: "200", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                  whileHover={{ scale: 1.2 }}
                  className="justify-center flex text-2xl md:text-3xl text-purple-900"
                >
                  <ImMic />
                </motion.div>
              </div>
            }
            background={"bg-purple-900"}
            count={
              <div className="pb-2">
                <span className="block">1</span>
                <span className="block">2</span>
                <span className="block">3</span>
                <span className="block">4</span>
                <span className="block">5</span>
                <span className="block">6</span>
                <span className="block">7</span>
                <span className="block">8</span>
                <span className="block">9</span>
                <span className="block">10</span>
                <span className="block">11</span>
                <span className="block">12</span>
                <span className="block">13</span>
                <span className="block">14</span>
              </div>
            }
            code={
              <code className="flex-auto relative block pt-4 mb-1 pl-2 ml-2 mr-2 overflow-x-auto scroll">
                <span className="text-fuchsia-400 block text-left">
                  import
                  <span className="text-neutral-100">{" { "}</span>
                  <span className="text-sky-300">AiOutlineHome</span>
                  <span className="text-neutral-100">{" } "}</span>
                  from
                  <span className="text-red-400"> "react-icons/ai"</span>
                  <span className="text-neutral-100">{";"}</span>
                </span>

                <span className="text-fuchsia-400 block text-left">
                  import
                  <span className="text-neutral-100">{" { "}</span>
                  <span className="text-sky-300">TiSocialInstagram</span>
                  <span className="text-neutral-100">{" } "}</span>
                  from
                  <span className="text-red-400"> "react-icons/ti"</span>
                  <span className="text-neutral-100">{";"}</span>
                </span>

                <span className="text-blue-500 block text-left"> </span>

                <span className="text-fuchsia-400 block text-left">
                  export default
                  <span className="text-blue-500"> function </span>
                  <span className="text-yellow-200">Index</span>
                  <span className="text-neutral-100">{"() {"}</span>
                </span>

                <span className="text-fuchsia-400 block text-left">
                  {"  "}
                  return <span className="text-neutral-100"> (</span>
                </span>

                <span className="text-neutral-500 block text-left">
                  {"  "}
                  {"  "}
                  {"<"}
                  <span className="text-blue-500">div </span>
                  <span className="text-sky-300">className</span>
                  <span className="text-neutral-100">=</span>
                  <span className="text-red-400">""</span>
                  {">"}
                </span>

                <span className="text-neutral-500 block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"<"}
                  <span className="text-blue-500">div </span>
                  <span className="text-sky-300">className</span>
                  <span className="text-neutral-100">=</span>
                  <span className="text-red-400">
                    "text-2xl text-black p-6"
                  </span>
                  {">"}
                </span>

                <span className="text-neutral-500 block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"  "}
                  {"<"}
                  <span className="text-emerald-400">AiOutlineHome </span>
                  {"/>"}
                </span>

                <span className="text-neutral-500 block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"</"}
                  <span className="text-blue-500">div </span>
                  {">"}
                </span>

                <span className="text-neutral-500 block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"<"}
                  <span className="text-emerald-400">TiSocialInstagram </span>
                  <span className="text-sky-300">className</span>
                  <span className="text-neutral-100">=</span>
                  <span className="text-red-400">
                    "text-4xl text-purple m-8"
                  </span>
                  {">"}
                </span>

                <span className="text-neutral-500 block text-left">
                  {"  "}
                  {"  "}
                  {"</"}
                  <span className="text-blue-500">div </span>
                  {">"}
                </span>

                <span className="text-neutral-100 block text-left">
                  {"  "}
                  );
                </span>

                <span className="text-neutral-100 block text-left">{"}"}</span>
              </code>
            }
          />
        </section>

        <section className="relative overflow-hidden mt-40 w-full h-auto flex flex-col justify-center">
          <Water />
          <motion.h1
            initial={{ y: "200", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-4xl z-10 sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10"
          >
            Em breve
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative w-full max-w-2xl self-center md:rounded-xl overflow-hidden
          bg-black text-neutral-100 shadow-2xl flex flex-col h-auto"
          >
            <div className="bg-neutral-600 bg-opacity-40 h-auto">
              <div className="flex-none h-11 flex  items-center px-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                  <div className="w-3 h-3 border-2 rounded-full border-yellow-400"></div>
                  <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                </div>
              </div>
              <div className="border-t border-white border-opacity-10">
                <div className="absolute h-full w-12 bg-black bg-opacity-25"></div>
                <div
                  className={`max-h-80 h-auto overflow-auto mt-2 mr-1 scroll`}
                >
                  <pre className="flex text-xs md:text-sm">
                    <div className="block w-12 text-white text-opacity-50 flex-none pt-2 pr-4 pb-2 text-right select-none">
                      <span className="block">1</span>
                      <span className="block">2</span>
                      <span className="block">3</span>
                      <span className="block">4</span>
                      <span className="block">5</span>
                      <span className="block">6</span>
                      <span className="block">7</span>
                      <span className="block">8</span>
                      <span className="block">9</span>
                      <span className="block">10</span>
                      <span className="block">11</span>
                    </div>
                    <code className="flex-auto relative text-neutral-100 block pt-2 mb-1 pl-2 ml-2 mr-2 overflow-auto scroll">
                      <span className="text-fuchsia-400 block text-left">
                        export default
                        <span className="text-blue-500"> function </span>
                        <span className="text-yellow-200">Opencode</span>
                        <span className="text-neutral-100">{"() {"}</span>
                      </span>

                      <span className="text-fuchsia-400 block text-left">
                        {"  "}
                        return <span className="text-neutral-100"> (</span>
                      </span>

                      <span className="text-neutral-500 block text-left">
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-emerald-400">Próxima </span>
                        <span className="text-sky-300">feature</span>
                        <span className="text-neutral-100">=</span>
                        <span className="text-blue-500">{"{SEO}"}</span>
                        {" />"}
                      </span>

                      <span className="text-neutral-500 block text-left">
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-blue-500">div </span>
                        <span className="text-sky-300">className</span>
                        <span className="text-neutral-100">=</span>
                        <span className="text-red-400">"Em breve"</span>
                        {">"}
                      </span>

                      <span className="text-neutral-500 block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-blue-500">span</span>
                        {">"}
                        <span className="text-neutral-100">
                          {" "}
                          framer-motion{" "}
                        </span>
                        {"<"}/<span className="text-blue-500">span</span>
                        {">"}
                      </span>

                      <span className="text-neutral-500 block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-blue-500">span</span>
                        {">"}
                        <span className="text-neutral-100">
                          {" "}
                          typing effect{" "}
                        </span>
                        {"<"}/<span className="text-blue-500">span</span>
                        {">"}
                      </span>

                      <span className="text-neutral-500 block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-blue-500">span</span>
                        {">"}
                        <span className="text-neutral-100">
                          {" "}
                          search engine{" "}
                        </span>
                        {"<"}/<span className="text-blue-500">span</span>
                        {">"}
                      </span>

                      <span className="text-neutral-500 block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-blue-500">span</span>
                        {">"}
                        <span className="text-neutral-100">
                          {" "}
                          carrinho de compras{" "}
                        </span>
                        {"<"}/<span className="text-blue-500">span</span>
                        {">"}
                      </span>

                      <span className="text-neutral-500 block text-left">
                        {"  "}
                        {"  "}
                        {"<"}/<span className="text-blue-500">div</span>
                        {">"}
                      </span>

                      <span className="text-neutral-100 block text-left">
                        {"  "});
                      </span>

                      <span className="text-neutral-100 block text-left">
                        {"}"}
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="h-40"></div>
        </section>
      </main>
    </div>
  );
}

export default Home;
