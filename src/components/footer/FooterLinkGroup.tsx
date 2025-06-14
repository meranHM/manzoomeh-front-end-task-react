interface FooterLinkGroupProps {
    title: string
    children: React.ReactNode
}


const FooterLinkGroup = ({ title, children }: FooterLinkGroupProps) => {
  return (
  <div className="flex flex-col items-center md:items-start justify-between gap-5 p-4">
    <h4 className="font-[1.125rem]">
        {title}
    </h4>
    {children}
  </div>
  )
}

export default FooterLinkGroup