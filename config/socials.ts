import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@xavier-cypto",
    icon: Icons.gitHub,
    link: "https://github.com/xavier-cypto/"
  },
  {
    name: "LinkedIn",
    username: "xavier-cypto",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/xavier-cypto",
  },
  {
    name: "Twitter",
    username: "@xavier-cypto",
    icon: Icons.twitter,
    link: "https://twitter.com/xavier-cypto",
  },
  {
    name: "Gmail",
    username: "kailjeze",
    icon: Icons.gmail,
    link: "mailto:kailjeze@gmail.com",
  },
];
