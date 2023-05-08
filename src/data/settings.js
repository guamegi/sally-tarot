import { AntDesign } from "@expo/vector-icons";

export const SETTINGS_MENU = [
  // language, Send your comments 추가
  {
    title: "Customize",
    icon: <AntDesign name="setting" size={22} color="white" />,
    data: ["Card selection"],
  },
  {
    title: "Service Center",
    icon: <AntDesign name="customerservice" size={22} color="white" />,
    data: ["Send Comments", "Write a review"],
  },
  {
    title: "Information",
    icon: <AntDesign name="infocirlceo" size={22} color="white" />,
    data: ["version"],
  },
];

// RadioButton props
export const CARD_SELECTION = [
  {
    id: "1",
    label: "1 Card",
    labelStyle: { color: "#d6d2d2", fontSize: 14 },
    color: "#d6d2d2",
    selected: true,
    size: 20,
    value: 1,
  },
  {
    id: "2",
    label: "3 Cards",
    labelStyle: { color: "#d6d2d2", fontSize: 14 },
    color: "#d6d2d2",
    selected: false,
    size: 20,
    value: 3,
  },
];
