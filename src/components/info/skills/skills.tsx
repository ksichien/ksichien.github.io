const SkillsComponent = () => {
  const categories: string[] = [
    'Cloud Services',
    'Hypervisors',
    'Linux Administration',
    'Windows Administration',
    'macOS Administration',
    'Automation Tools',
    'Continuous Integration',
    'Programming Languages',
    'Scripting Languages'
  ]
  const technologies: string[] = [
    'AWS, Azure',
    'Hyper-V, VMware ESXi',
    'Bind, Grafana, Prometheus',
    'Active Directory, Office 365',
    'Jamf Pro',
    'Ansible, Docker, Terraform',
    'Jenkins',
    'C#, JavaScript',
    'Bash, PowerShell'
  ]
  const columns = categories.map((category, index) => {
    return <div className="flex flex-row justify-center gap-3" key={`${category}-${index}`}>
      <span className="base-1/2 w-full md:text-base text-sm text-right">{category}</span>
      <span className="base-1/2 w-full md:text-base text-sm text-left">{technologies[index]}</span>
    </div>
  })

  return (
      <section className="flex flex-col h-full text-center text-neutral-300">
        <h3 className="text-3xl text-bold py-3">Skills</h3>
        <div className="flex flex-col align-center justify-center">
          {columns}
        </div>
      </section>
  )
}

export default SkillsComponent
