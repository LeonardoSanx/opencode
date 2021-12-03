import Head from "next/head";
import CodeBlock from "../components/code_block";
import CodeNav from "../components/code_nav";
import Navbar from "../components/navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const themes = ["theme-green", "theme-gray", "theme-blue"];
  const [selectedTheme, setselectedTheme] = useState(themes[0]);

  return (
    <div className="">
      <Head>
        <title>Opencode</title>
        <link rel="icon" href="../images/Computer_perspective_matte.png" />
        <meta
          name="description"
          content="Functionalities, components, comfigurations, free and ready to use code, navbar, google fonts, react-icons, custom theme"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col w-full items-center content-center justify-center min-h-screen">
        <section className="w-full mb-40 overflow-hidden">
          <Navbar />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-12 mb-8 sm:mt-14 sm:mb-10">
            Navbar Responsiva
          </h1>
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
                    <span className="text-code-import block text-left">
                      import
                      <span className="text-code-text">{" { "}</span>
                      <span className="text-code-attr-name">useState</span>
                      <span className="text-code-text">{" } "}</span>
                      from
                      <span className="text-code-attr-value"> "react"</span>
                      <span className="text-code-text">{";"}</span>
                    </span>

                    <span className="text-code-import block text-left">
                      import
                      <span className="text-code-attr-name"> Mobile </span>
                      from
                      <span className="text-code-attr-value"> "./mobile"</span>
                      <span className="text-code-text">{";"}</span>
                    </span>

                    <span className="text-code-import block text-left">
                      import
                      <span className="text-code-text">{" { "}</span>
                      <span className="text-code-attr-name">BiMenu, Bix</span>
                      <span className="text-code-text">{" } "}</span>
                      from
                      <span className="text-code-attr-value">
                        {" "}
                        "react-icons/bi"
                      </span>
                      <span className="text-code-text">{";"}</span>
                    </span>

                    <span className="text-code-tag block text-left"> </span>

                    <span className="text-code-import block text-left">
                      export default
                      <span className="text-code-tag"> function </span>
                      <span className="text-code-function">Navbar</span>
                      <span className="text-code-text">{"() {"}</span>
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      <span className="text-code-tag">const </span>[
                      <span className="text-code-tag">navPosition</span>,
                      <span className="text-code-function">
                        {" "}
                        setnavPosition
                      </span>
                      ] = <span className="text-code-function">useState</span>(
                      <span className="text-code-attr-value">"-top-full"</span>
                      );
                    </span>

                    <span className="text-code-import block text-left">
                      {"  "}
                      return <span className="text-code-text"> (</span>
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">div </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">""</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-component">Mobile </span>
                      <span className="text-code-attr-name">navPosition</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-tag">{"{navPosition}"}</span>
                      {" />"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">div </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">
                        "sticky top-0 left-0 w-full z-30 bg-white shadow-lg
                        justify-center"
                      </span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">div </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">
                        "max-w-6xl z-50 mx-auto px-10"
                      </span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">div </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">
                        "flex items-center justify-between h-16 sm:h-20"
                      </span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">a </span>
                      <span className="text-code-attr-name">href</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">"/"</span>
                      {">"}
                    </span>

                    <span className="text-code-text text-opacity-80 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"{!-- Logo --}"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">a</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">nav </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">
                        "hidden md:flex md:flex-grow"
                      </span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">ul </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">
                        "flex flex-grow justify-end flex-wrap items-center"
                      </span>
                      {">"}
                    </span>

                    <span className="text-code-text text-opacity-80 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"{!-- Links --}"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">ul</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">nav</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">div </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">
                        "flex-col w-5 md:hidden cursor-pointer text-2xl
                        sm:text-3xl transition-all duration-500"
                      </span>
                      {">"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">onClick</span>=
                      <span className="text-code-tag">{"{"}</span>
                      ()
                      <span className="text-code-tag">{" => "}</span>
                      {"{"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-tag">navPosition </span>
                      ==
                      <span className="text-code-attr-value"> "top-0"</span>
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"? "}
                      <span className="text-code-function">setnavPosition</span>
                      (<span className="text-code-attr-value">"-top-full"</span>
                      )
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {": "}
                      <span className="text-code-function">setnavPosition</span>
                      (<span className="text-code-attr-value">"-top-0"</span>
                      );
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"}"}
                      <span className="text-code-tag">{"}"}</span>
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-tag">{"{navPosition"}</span>
                      <span className="text-code-text"> == </span>
                      <span className="text-code-attr-value">"top-0"</span>
                      <span className="text-code-text"> ? </span>
                      {"<"}
                      <span className="text-code-component">BiX</span>
                      {" />"}
                      <span className="text-code-text"> : </span>
                      {"<"}
                      <span className="text-code-component">BiMenu</span>
                      {" />"}
                      <span className="text-code-tag">{"}"}</span>
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">div</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">div</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">div</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">div</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">div</span>
                      {">"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      );
                    </span>

                    <span className="text-code-text block text-left">
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
                    <span className="text-code-import block text-left">
                      export default
                      <span className="text-code-tag"> function </span>
                      <span className="text-code-function">Mobile</span>
                      <span className="text-code-text">{"() {"}</span>
                    </span>

                    <span className="text-code-import block text-left">
                      {"  "}
                      return <span className="text-code-text"> (</span>
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">div </span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      className
                      <span className="text-code-text">=</span>
                      <span className="text-code-tag">
                        {"{"}
                        <span className="text-code-attr-value">`absolute</span>
                        {" %{"}
                        <span className="text-code-attr-name">navPosition</span>
                        {"} "}
                        <span className="text-code-attr-value">
                          w-full z-30 bg-white pb-2 mt-24 md:hidden
                          transition-all duration-500`
                        </span>
                        {"}"}
                      </span>
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">nav </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">"w-full"</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"<"}
                      <span className="text-code-tag">ul </span>
                      <span className="text-code-attr-name">className</span>
                      <span className="text-code-text">=</span>
                      <span className="text-code-attr-value">
                        "flex justify-end flex-wrap items-center"
                      </span>
                      {">"}
                    </span>

                    <span className="text-code-text text-opacity-80 block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"{!-- Links --}"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">ul</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">nav</span>
                      {">"}
                    </span>

                    <span className="text-code-brakket block text-left">
                      {"  "}
                      {"  "}
                      {"</"}
                      <span className="text-code-tag">div</span>
                      {">"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      );
                    </span>

                    <span className="text-code-text block text-left">
                      {"}"}
                    </span>
                  </code>,
                ],
              },
            ]}
          />
        </section>

        <section className=" w-full mb-40 overflow-hidden">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Google Fonts
          </h1>
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
                <span className="text-code-component block text-left">
                  <span className="text-code-brakket">{"<"}</span>
                  Head
                  <span className="text-code-brakket">{">"}</span>
                </span>

                <span className="text-code-tag block text-left">
                  {"  "}
                  <span className="text-code-brakket">{"<"}</span>
                  link{" "}
                  <span className="text-code-attr-name">
                    rel
                    <span className="text-code-text">=</span>
                    <span className="text-code-attr-value">"preconnect" </span>
                  </span>
                  <span className="text-code-attr-name">
                    href
                    <span className="text-code-text">=</span>
                    <span className="text-code-attr-value">
                      "https://fonts.googleapis.com"{" "}
                    </span>
                  </span>
                  <span className="text-code-brakket">{"/>"}</span>
                </span>

                <span className="text-code-tag block text-left">
                  {"  "}
                  <span className="text-code-brakket">{"<"}</span>
                  link{" "}
                  <span className="text-code-attr-name">
                    rel
                    <span className="text-code-text">=</span>
                    <span className="text-code-attr-value">"preconnect" </span>
                  </span>
                  <span className="text-code-attr-name">
                    href
                    <span className="text-code-text">=</span>
                    <span className="text-code-attr-value">
                      "https://fonts.gstatic.com"{" "}
                    </span>
                  </span>
                  <span className="text-code-attr-name">crossorigin </span>
                  <span className="text-code-brakket">{"/>"}</span>
                </span>

                <span className="text-code-tag block text-left">
                  {"  "}
                  <span className="text-code-brakket">{"<"}</span>
                  link
                </span>

                <span className="text-code-attr-name block text-left">
                  {"  "}
                  {"  "}
                  href
                  <span className="text-code-text">=</span>
                  <span className="text-code-attr-value">
                    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                  </span>
                </span>

                <span className="text-code-attr-name block text-left">
                  {"  "}
                  {"  "}
                  rel
                  <span className="text-code-text">=</span>
                  <span className="text-code-attr-value">"stylesheet" </span>
                </span>

                <span className="text-code-brakket block text-left">
                  {"  "}
                  {"/>"}
                </span>

                <span className="text-code-component block text-left">
                  <span className="text-code-brakket">{"<"}\</span>
                  Head
                  <span className="text-code-brakket">{">"}</span>
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
              <code className="flex-auto relative text-code-text block pt-4 mb-1 pl-2 ml-2 mr-2 overflow-auto scroll">
                <span className="text-code-component block text-left">
                  module
                  <span className="text-code-text">{"."}</span>
                  exports
                  <span className="text-code-text">{" = "}</span>
                  <span className="text-code-text">{"{"}</span>
                </span>

                <span className="text-code-attr-name block text-left">
                  {"  "}
                  theme:
                  <span className="text-code-text">{" {"}</span>
                </span>

                <span className="text-code-attr-name block text-left">
                  {"  "}
                  {"  "}
                  extend:
                  <span className="text-code-text">{" {"}</span>
                </span>

                <span className="text-code-attr-name block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  fontFamily:
                  <span className="text-code-text">{" {"}</span>
                </span>

                <span className="text-code-attr-name block text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"  "}
                  caveat:{" "}
                  <span className="text-code-attr-value">
                    "'Caveat', cursive"
                  </span>
                  <span className="text-code-text">,</span>
                </span>

                <span className="block text-code-text text-left">
                  {"  "}
                  {"  "}
                  {"  "}
                  {"},"}
                </span>

                <span className="block text-code-text text-left">
                  {"  "}
                  {"  "}
                  {"},"}
                </span>

                <span className="block text-code-text text-left">
                  {"  "}
                  {"},"}
                </span>

                <span className="block text-code-text text-left">{"};"}</span>
              </code>
            }
          />
        </section>

        <section className="w-full mb-40 overflow-hidden">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-12 mb-8 sm:mt-14 sm:mb-10">
            Custom Themes
          </h1>
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
                    <div className={`${selectedTheme} mt-4`}>
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
              { id: 2, name: "card.js" },
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
                    <span className="text-code-import block text-left">
                      @tailwind
                      <span className="text-code-attr-name"> base;</span>
                    </span>

                    <span className="text-code-import block text-left">
                      @tailwind
                      <span className="text-code-attr-name"> components;</span>
                    </span>

                    <span className="text-code-import block text-left">
                      @tailwind
                      <span className="text-code-attr-name"> utilities;</span>
                    </span>

                    <span className="text-code-tag block text-left"> </span>

                    <span className="text-code-import block text-left">
                      @layer
                      <span className="text-code-attr-name"> base</span>
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-function block text-left">
                      {"  "}
                      .theme-green
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">--color-card</span>:
                      216, 228, 200;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">--color-title</span>
                      : 21, 27, 13;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">
                        --color-card-text
                      </span>
                      : 43, 55, 27;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">
                        --color-contrast
                      </span>
                      : 177, 201, 146;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  }"}
                    </span>

                    <span className="text-code-function block text-left">
                      {"  "}
                      .theme-gray
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">--color-card</span>:
                      32, 28, 33;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">--color-title</span>
                      : 226, 222, 227;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">
                        --color-card-text
                      </span>
                      : 187, 178, 189;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">
                        --color-contrast
                      </span>
                      : 54, 47, 55;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  }"}
                    </span>

                    <span className="text-code-function block text-left">
                      {"  "}
                      .theme-blue
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">--color-card</span>:
                      0, 110, 144;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">--color-title</span>
                      : 194, 241, 255;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">
                        --color-card-text
                      </span>
                      : 10, 198, 255;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">
                        --color-contrast
                      </span>
                      : 0, 63, 82;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  }"}
                    </span>

                    <span className="text-code-text block text-left">
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
                    <span className="text-code-text block text-left">
                      <span className="text-code-tag">function </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-name">variableName</span>
                      {") {"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      <span className="text-code-import">return</span>
                      {" ({ "}
                      <span className="text-code-attr-name">opacityValue</span>
                      {" )} "}
                      <span className="text-code-tag">{"=>"}</span>
                      {" {"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-import">if</span>
                      {" ("}
                      <span className="text-code-attr-name">opacityValue </span>
                      ==
                      <span className="text-code-tag"> undefined</span>
                      {") {"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">opacityValue </span>
                      == 1;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  }"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-import">return</span>
                      {" ({ "}
                      <span className="text-code-attr-value">
                        `rgba(var(
                        <span className="text-code-tag">
                          {"${"}
                          <span className="text-code-attr-name">
                            variableName
                          </span>
                          {"}"}
                        </span>
                        ),
                        <span className="text-code-tag">
                          {"${"}
                          <span className="text-code-attr-name">
                            opacityValue
                          </span>
                          {"}"}
                        </span>
                        )`
                      </span>
                      ;
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"};"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"}"}
                    </span>

                    <span className="text-code-tag block text-left"> </span>
                    <span className="text-code-tag block text-left"> </span>

                    <span className="text-code-component block text-left">
                      module
                      <span className="text-code-text">{"."}</span>
                      exports
                      <span className="text-code-text">{" = "}</span>
                      <span className="text-code-text">{"{"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      theme:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      extend:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      textColor:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      card:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">title</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-title"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">text</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-card-text"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      backgroundColor:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      card:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">card</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-card"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">contrast</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-contrast"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
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
                    <span className="text-code-text block text-left">
                      <span className="text-code-tag">function </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-name">variableName</span>
                      {") {"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      <span className="text-code-import">return</span>
                      {" ({ "}
                      <span className="text-code-attr-name">opacityValue</span>
                      {" )} "}
                      <span className="text-code-tag">{"=>"}</span>
                      {" {"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-import">if</span>
                      {" ("}
                      <span className="text-code-attr-name">opacityValue </span>
                      ==
                      <span className="text-code-tag"> undefined</span>
                      {") {"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-attr-name">opacityValue </span>
                      == 1;
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  }"}
                    </span>

                    <span className="text-code-text block text-left">
                      {"  "}
                      {"  "}
                      <span className="text-code-import">return</span>
                      {" ({ "}
                      <span className="text-code-attr-value">
                        `rgba(var(
                        <span className="text-code-tag">
                          {"${"}
                          <span className="text-code-attr-name">
                            variableName
                          </span>
                          {"}"}
                        </span>
                        ),
                        <span className="text-code-tag">
                          {"${"}
                          <span className="text-code-attr-name">
                            opacityValue
                          </span>
                          {"}"}
                        </span>
                        )`
                      </span>
                      ;
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"};"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"}"}
                    </span>

                    <span className="text-code-tag block text-left"> </span>
                    <span className="text-code-tag block text-left"> </span>

                    <span className="text-code-component block text-left">
                      module
                      <span className="text-code-text">{"."}</span>
                      exports
                      <span className="text-code-text">{" = "}</span>
                      <span className="text-code-text">{"{"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      theme:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      extend:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      textColor:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      card:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">title</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-title"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">text</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-card-text"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      backgroundColor:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="text-code-attr-name block text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      card:
                      <span className="text-code-text">{" {"}</span>
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">card</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-card"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      <span className="text-code-function">contrast</span>
                      <span className="text-code-attr-name">: </span>
                      <span className="text-code-function">withOpacity</span>(
                      <span className="text-code-attr-value">
                        "--color-contrast"
                      </span>
                      ),
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"  "}
                      {"},"}
                    </span>

                    <span className="block text-code-text text-left">
                      {"};"}
                    </span>
                  </code>,
                ],
              },
            ]}
          />
        </section>

        <section className="overflow-hidden w-full h-auto mb-40 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
            Comming Soon
          </h1>
          <div
            className="relative w-full max-w-2xl self-center md:rounded-xl overflow-hidden
          bg-black text-code-text shadow-2xl flex flex-col h-auto"
          >
            <div className="bg-gray-600 bg-opacity-40 h-auto">
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
                      <span className="block">12</span>
                    </div>
                    <code className="flex-auto relative text-code-text block pt-2 mb-1 pl-2 ml-2 mr-2 overflow-auto scroll">
                      <span className="text-code-import block text-left">
                        export default
                        <span className="text-code-tag"> function </span>
                        <span className="text-code-function">Opencode</span>
                        <span className="text-code-text">{"() {"}</span>
                      </span>

                      <span className="text-code-import block text-left">
                        {"  "}
                        return <span className="text-code-text"> (</span>
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-code-component">Comming </span>
                        <span className="text-code-attr-name">next</span>
                        <span className="text-code-text">=</span>
                        <span className="text-code-tag">{"{customTheme}"}</span>
                        {" />"}
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-code-tag">div </span>
                        <span className="text-code-attr-name">className</span>
                        <span className="text-code-text">=</span>
                        <span className="text-code-attr-value">
                          "Comming Soon"
                        </span>
                        {">"}
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-code-tag">span</span>
                        {">"}
                        <span className="text-code-text"> react-icons </span>
                        {"<"}/<span className="text-code-tag">span</span>
                        {">"}
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-code-tag">span</span>
                        {">"}
                        <span className="text-code-text"> framer-motion </span>
                        {"<"}/<span className="text-code-tag">span</span>
                        {">"}
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-code-tag">span</span>
                        {">"}
                        <span className="text-code-text"> SEO </span>
                        {"<"}/<span className="text-code-tag">span</span>
                        {">"}
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-code-tag">span</span>
                        {">"}
                        <span className="text-code-text"> typing effect </span>
                        {"<"}/<span className="text-code-tag">span</span>
                        {">"}
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"  "}
                        {"<"}
                        <span className="text-code-tag">span</span>
                        {">"}
                        <span className="text-code-text"> search engine </span>
                        {"<"}/<span className="text-code-tag">span</span>
                        {">"}
                      </span>

                      <span className="text-code-brakket block text-left">
                        {"  "}
                        {"  "}
                        {"<"}/<span className="text-code-tag">div</span>
                        {">"}
                      </span>

                      <span className="text-code-text block text-left">
                        {"  "});
                      </span>

                      <span className="text-code-text block text-left">
                        {"}"}
                      </span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
