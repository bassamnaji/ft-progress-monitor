<template>
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="px-6 pb-6 pt-4 bg-slate-200 dark:bg-slate-700 shadow-lg rounded">
        <div class="flex flex-wrap items-center mb-3">
          <div>
            <div class="flex items-center">
              <h3 class="mr-2 text-xl text-slate-800 dark:text-slate-50 font-bold">Common Core Projects</h3>
            </div>
          </div>
        </div>

        <div class="w-full border border-slate-300 dark:border-inherit my-10"></div>

        <div>
          <Project :project="projects.at(0)"/>
        </div>

        <div class="w-full border border-slate-300 dark:border-inherit my-10"></div>

        <div class="mb-10">
          <Project :project="projects.at(1)"/>
          <Project :project="projects.at(2)"/>
          <Project :project="projects.at(3)"/>
        </div>

        <div class="w-full border border-slate-300 dark:border-inherit my-10"></div>

        <div class="mb-10">
          <Project :project="projects.at(4)"/>
          <Project :project="projects.at(5)"/>
          <Project :project="projects.at(6)"/>
        </div>

        <div class="mb-10">
          <Project :project="projects.at(7)"/>
          <Project :project="projects.at(8)"/>
        </div>

        <div>
          <Project :project="projects.at(9)"/>
        </div>
        
        <div class="w-full border border-slate-300 dark:border-inherit my-10"></div>
        
        <div class="mb-10">
          <Project :project="projects.at(10)"/>
          <Project :project="projects.at(11)"/>
        </div>
        
        <div class="w-full border border-slate-300 dark:border-inherit my-10"></div>
        
        <div class="mb-10">
          <Project :project="projects.at(12)"/>
        </div>
        
        <div class="mb-10">
          <Project :project="projects.at(13)"/>
          <Project :project="projects.at(14)"/>
        </div>
        
        <div class="mb-10">
          <Project :project="projects.at(15)"/>
          <Project :project="projects.at(16)"/>
          <Project :project="projects.at(17)"/>
          <Project :project="projects.at(18)"/>
          <Project :project="projects.at(19)"/>
          <Project :project="projects.at(20)"/>
          <Project :project="projects.at(21)"/>
          <Project :project="projects.at(22)"/>
          <Project :project="projects.at(23)"/>
        </div>

        <div class="w-full border border-slate-300 dark:border-inherit my-10"></div>
        
        
        <div class="mb-10">
          <Project :project="projects.at(24)"/>
        </div>
        
        <div class="mb-10">
          <Project :project="projects.at(25)"/>
          <Project :project="projects.at(26)"/>
        </div>
        
        <div class="mb-10">
          <Project :project="projects.at(27)"/>
        </div>
        
        <div class="w-full border border-slate-300 dark:border-inherit my-10"></div>
        
        <div class="mb-10">
          <Project :project="projects.at(28)"/>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
  const projects = [
    {
      name: "Libft",
      src: "https://projects.intra.42.fr/42cursus-libft/mine",
      subject: "https://cdn.intra.42.fr/pdf/pdf/70131/en.subject.pdf"
    },
    {
      name: "get_next_line",
      src: "https://projects.intra.42.fr/projects/42cursus-get_next_line",
      subject: "https://cdn.intra.42.fr/pdf/pdf/70139/en.subject.pdf"
    },
    {
      name: "ft_printf",
      src: "https://projects.intra.42.fr/projects/42cursus-ft_printf",
      subject: "https://cdn.intra.42.fr/pdf/pdf/69195/en.subject.pdf"
    },
    {
      name: "Born2beroot",
      src: "https://projects.intra.42.fr/projects/born2beroot",
      subject: "https://cdn.intra.42.fr/pdf/pdf/68664/en.subject.pdf"
    },
    {
      name: "so_long",
      src: "https://projects.intra.42.fr/projects/so_long",
      subject: "https://cdn.intra.42.fr/pdf/pdf/68555/en.subject.pdf"
    },
    {
      name: "fract-ol",
      src: "https://projects.intra.42.fr/projects/42cursus-fract-ol",
      subject: "https://cdn.intra.42.fr/pdf/pdf/65475/en.subject.pdf"
    },
    {
      name: "FdF",
      src: "https://projects.intra.42.fr/projects/42cursus-fdf",
      subject: "https://cdn.intra.42.fr/pdf/pdf/70122/en.subject.pdf"
    },
    {
      name: "Minitalk",
      src: "https://projects.intra.42.fr/projects/minitalk",
      subject: "https://cdn.intra.42.fr/pdf/pdf/56849/en.subject.pdf"
    },
    {
      name: "Pipex",
      src: "https://projects.intra.42.fr/projects/pipex",
      subject: "https://cdn.intra.42.fr/pdf/pdf/66249/en.subject.pdf"
    },
    {
      name: "push_swap",
      src: "https://projects.intra.42.fr/projects/42cursus-push_swap",
      subject: "https://cdn.intra.42.fr/pdf/pdf/75132/en.subject.pdf"
    },
    {
      name: "minishell",
      src: "https://projects.intra.42.fr/projects/42cursus-minishell",
      subject: "https://cdn.intra.42.fr/pdf/pdf/65486/en.subject.pdf"
    },
    {
      name: "Philosophers",
      src: "https://projects.intra.42.fr/projects/42cursus-philosophers",
      subject: "https://cdn.intra.42.fr/pdf/pdf/65661/en.subject.pdf"
    },
    {
      name: "NetPractice",
      src: "https://projects.intra.42.fr/projects/netpractice",
      subject: "https://cdn.intra.42.fr/pdf/pdf/58599/en.subject.pdf"
    },
    {
      name: "cub3d",
      src: "https://projects.intra.42.fr/projects/cub3d",
      subject: "https://cdn.intra.42.fr/pdf/pdf/68043/en.subject.pdf"
    },
    {
      name: "miniRT",
      src: "https://projects.intra.42.fr/projects/minirt",
      subject: "https://cdn.intra.42.fr/pdf/pdf/76067/en.subject.pdf"
    },
    {
      name: "CPP Module 00",
      src: "https://projects.intra.42.fr/projects/cpp-module-00",
      subject: "https://cdn.intra.42.fr/pdf/pdf/68551/en.subject.pdf"
    },
    {
      name: "CPP Module 01",
      src: "https://projects.intra.42.fr/projects/cpp-module-01",
      subject: "https://cdn.intra.42.fr/pdf/pdf/68560/en.subject.pdf"
    },
    {
      name: "CPP Module 02",
      src: "https://projects.intra.42.fr/projects/cpp-module-02",
      subject: "https://cdn.intra.42.fr/pdf/pdf/76059/en.subject.pdf"
    },
    {
      name: "CPP Module 03",
      src: "https://projects.intra.42.fr/projects/cpp-module-03",
      subject: "https://cdn.intra.42.fr/pdf/pdf/52158/en.subject.pdf"
    },
    {
      name: "CPP Module 04",
      src: "https://projects.intra.42.fr/projects/cpp-module-04",
      subject: "https://cdn.intra.42.fr/pdf/pdf/71798/en.subject.pdf"
    },
    {
      name: "CPP Module 05",
      src: "https://projects.intra.42.fr/projects/cpp-module-05",
      subject: "https://cdn.intra.42.fr/pdf/pdf/67416/en.subject.pdf"
    },
    {
      name: "CPP Module 06",
      src: "https://projects.intra.42.fr/projects/cpp-module-06",
      subject: "https://cdn.intra.42.fr/pdf/pdf/71800/en.subject.pdf"
    },
    {
      name: "CPP Module 07",
      src: "https://projects.intra.42.fr/projects/cpp-module-07",
      subject: "https://cdn.intra.42.fr/pdf/pdf/61100/en.subject.pdf"
    },
    {
      name: "CPP Module 08",
      src: "https://projects.intra.42.fr/projects/cpp-module-08",
      subject: "https://cdn.intra.42.fr/pdf/pdf/52156/en.subject.pdf"
    },
    {
      name: "ft_containers",
      src: "https://projects.intra.42.fr/projects/ft_containers",
      subject: "https://cdn.intra.42.fr/pdf/pdf/75954/en.subject.pdf"
    },
    {
      name: "webserv",
      src: "https://projects.intra.42.fr/projects/webserv",
      subject: "https://cdn.intra.42.fr/pdf/pdf/71781/en.subject.pdf"
    },
    {
      name: "ft_irc",
      src: "https://projects.intra.42.fr/projects/ft_irc",
      subject: "https://cdn.intra.42.fr/pdf/pdf/70120/en.subject.pdf"
    },
    {
      name: "Inception",
      src: "https://projects.intra.42.fr/projects/inception",
      subject: "https://cdn.intra.42.fr/pdf/pdf/72677/en.subject.pdf"
    },
    {
      name: "ft_transcendence",
      src: "https://projects.intra.42.fr/projects/ft_transcendence",
      subject: "https://cdn.intra.42.fr/pdf/pdf/74304/en.subject.pdf"
    },
  ]
</script>
