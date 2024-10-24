import { nanoid } from "nanoid";
import { FaMoneyBill } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";
import { MdRecordVoiceOver } from "react-icons/md";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#experiment", text: "experiment" },
  { id: nanoid(), href: "#questions", text: "questions" },
  { id: nanoid(), href: "#testimonials", text: "testimonials" },
  { id: nanoid(), href: "#conclusion", text: "conclusion" },
];

export const questions = [
  {
    id: nanoid(),
    icon: <FaMoneyBill className="h-16 w-16 text-blue-500" />,
    text: "From where do people your age prefer to buy their vapes and vaping products? How do they choose from where to buy their vapes?",
  },
  {
    id: nanoid(),
    icon: <IoStorefront className="h-16 w-16 text-blue-500" />,
    text: "Generally, what about e-cigarettes in retail stores is attractive? Least attractive?",
  },
  {
    id: nanoid(),
    icon: <MdRecordVoiceOver className="h-16 w-16 text-blue-500" />,
    text: "Imagine that we had the power to change how vaping products are marketed. Can you suggest steps to discourage young people from entering stores to buy vapes?",
  },
];

export const testimonials = [
  {
    id: nanoid(),
    img: "https://media.licdn.com/dms/image/v2/D5603AQHgBYdbexV5yA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718747779148?e=1735171200&v=beta&t=2iPSWN_6CnbddsPnutT1dGoZltUihgJje83HfNn8zII",
    text: "“In like convenience stores, gas stations… they will advertise it with posters on the front of the store, as well, saying that they have this sort of vape in stock.”",
  },
  {
    id: nanoid(),
    img: "https://media.licdn.com/dms/image/v2/D5603AQHMjNSHm0_8SQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680211653128?e=1735171200&v=beta&t=lmYlTrtvT3EOz41nrJuXx0CoQiufVULJiw9uH_gpn-M",
    text: "“It's, like, really cool minimalistic designs – or they be using some type of neon color. Sometimes it be a quote saying, like, vape is cool.”",
  },
  {
    id: nanoid(),
    img: "https://media.licdn.com/dms/image/v2/D5603AQHjdNCE4Y8VrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707457780384?e=1735171200&v=beta&t=Me2-okS6Q4CBTALfG7C6TPSBUTx7qH6XMhBHvd8KW98",
    text: "“Some (salespeople)… had like smelling samples, so they were like, “Oh, come here and try this.”… ​​But also I know that one friend told me she just used to buy with her sibling at a vape shop, just because she doesn't really trust how the flavors smell online.”",
  },
];
