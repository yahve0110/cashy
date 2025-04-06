import city from "@/assets/backgrounds/city.jpg";
import coffe from "@/assets/backgrounds/coffe.jpg";
import desk from "@/assets/backgrounds/desk.jpg";
import desk2 from "@/assets/backgrounds/desk2.jpg";
import field from "@/assets/backgrounds/field.jpg";
import field2 from "@/assets/backgrounds/field2.jpg";
import forest from "@/assets/backgrounds/forest.jpg";
import forestSunSet from "@/assets/backgrounds/forestSunSet.jpg";
import mountains from "@/assets/backgrounds/mountains.jpg";
import music from "@/assets/backgrounds/music.jpg";
export const backgroundData = [
    { id: "city", name: "City", image: city, status: "selected" },
    { id: "coffe", name: "Coffee", image: coffe, status: "owned" },
    { id: "desk", name: "Desk", image: desk, status: "buy", price: 100 },
    { id: "desk2", name: "Desk 2", image: desk2, status: "locked", note: "Could be obtained from event" },
    { id: "field", name: "Field", image: field, status: "buy", price: 100 },
    { id: "field2", name: "Field 2", image: field2, status: "owned" },
    { id: "forest", name: "Forest", image: forest, status: "owned" },
    { id: "forestSunSet", name: "Forest Sunset", image: forestSunSet, status: "buy", price: 100 },
    { id: "mountains", name: "Mountains", image: mountains, status: "locked", note: "Limited edition" },
    { id: "music", name: "Music", image: music, status: "buy", price: 100 },
];
