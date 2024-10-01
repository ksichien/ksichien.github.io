const IntroductionComponent = () => {
  return (
    <section className="flex flex-col h-full justify-center items-center text-center text-neutral-300 gap-3 pt-3">
      <h1 className="text-3xl text-bold">Introduction</h1>
      <p className="md:w-1/3 w-2/3">
        I am an accomplished system administrator with extensive experience in automating processes across Windows, Linux, and macOS environments. My technical expertise includes proficiency in PowerShell, Ansible, and Bash scripting, which enables me to optimize and streamline operational workflows.
      </p>
      <p className="md:w-1/3 w-2/3">
        In addition to systems administration, I have a strong background in developing robust web applications using C# (ASP.NET) and JavaScript. I also specialize in automating cloud infrastructure on AWS and Azure, and I am well-versed in utilizing monitoring tools such as Grafana, Prometheus, and Graylog.
      </p>
    </section>
  )
}

export default IntroductionComponent
