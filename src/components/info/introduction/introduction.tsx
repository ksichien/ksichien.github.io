const IntroductionComponent = () => {
  return (
    <section className="flex flex-col h-full justify-center items-center text-center text-neutral-300 gap-3 pt-3">
      <h1 className="text-3xl text-bold">Introduction</h1>
      <p className="md:w-1/3 w-2/3">
        I'm an experienced system administrator skilled in automating processes across Windows, Linux, and macOS. My expertise includes PowerShell, Ansible, and Bash scripting.
      </p>
      <p className="md:w-1/3 w-2/3">
        I've also developed robust web applications using C# (ASP.NET) and JavaScript.</p>
      <p className="md:w-1/3 w-2/3">
        Additionally, I've automated cloud infrastructure on AWS and Azure, and I'm familiar with monitoring tools like Grafana, Prometheus, Zabbix and Graylog.
      </p>
    </section>
  )
}

export default IntroductionComponent
