import Accordion from "../Components/Accordion";

function AccordionPages() {
  const items=[
    {
      id:1,
      label:"Can I use a React for my Projects",
      content:"Yes you can use React to your projects because this is simple to use and design your project with the code reusiablity."


    },
    {
      id:2,
      label:"Can I use a React for my Projects",
      content:"Yes you can use React to your projects because this is simple to use and design your project with the code reusiablity."


    },
    {
      id:3,
      label:"Can I use a React for my Projects",
      content:"Yes you can use React to your projects because this is simple to use and design your project with the code reusiablity."


    }
  ]


return (
  <Accordion items={items}/>
)
  
}

export default AccordionPages;
