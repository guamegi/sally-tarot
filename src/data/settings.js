import { AntDesign } from "@expo/vector-icons";

export const SETTINGS_MENU = [
  // language, Send your comments 추가
  {
    title: "Customize",
    icon: <AntDesign name="setting" size={24} color="white" />,
    data: ["Shuffle cards", "Card selection"],
  },
  {
    title: "Service Center",
    icon: <AntDesign name="customerservice" size={24} color="white" />,
    data: ["Leave a review"],
  },
  {
    title: "Information",
    icon: <AntDesign name="infocirlceo" size={24} color="white" />,
    data: ["version"],
  },
];

export const SHUFFLE_CARDS = [
  {
    id: "1",
    label: "Option 1",
    labelStyle: { color: "#d6d2d2", fontSize: 16 },
    color: "#d6d2d2",
    selected: true,
    value: require("../assets/images/menu/daily.jpeg"),
  },
  {
    id: "2",
    label: "Option 2",
    labelStyle: { color: "#d6d2d2", fontSize: 16 },
    color: "#d6d2d2",
    selected: false,
    value: require("../assets/images/menu/career.jpeg"),
  },
  {
    id: "3",
    label: "Option 3",
    labelStyle: { color: "#d6d2d2", fontSize: 16 },
    color: "#d6d2d2",
    selected: false,
    value: require("../assets/images/menu/family.jpeg"),
  },
];

export const CARD_SELECTION = [
  {
    id: "1",
    label: "Option 4",
    labelStyle: { color: "#d6d2d2", fontSize: 16 },
    color: "#d6d2d2",
    selected: true,
    value: require("../assets/images/menu/finance.jpeg"),
  },
  {
    id: "2",
    label: "Option 5",
    labelStyle: { color: "#d6d2d2", fontSize: 16 },
    color: "#d6d2d2",
    selected: false,
    value: require("../assets/images/menu/growth.jpeg"),
  },
  {
    id: "3",
    label: "Option 6",
    labelStyle: { color: "#d6d2d2", fontSize: 16 },
    color: "#d6d2d2",
    selected: false,
    value: require("../assets/images/menu/love.jpeg"),
  },
];
