import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Greeting";
import UserProfileCard from "./Profile";

const App = () => {
  let users = [
    {
      name: "Ross Geller",
      img: "https://avatars.mds.yandex.net/i?id=ce99193a667f39fc530a2d91455d932d3f378561-4443859-images-thumbs&n=13",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam blanditiis ipsam ullam atque, illo necessitatibus aspernatur quo voluptate asperiores quisquam ratione delectus quos repellat. Fuga rem pariatur facere, asperiores, totam magnam dicta praesentium harum ipsa perferendis quas adipisci, soluta cupiditate iste. Vero rerum provident, amet illum facere reiciendis eum ad, in ratione quaerat tempora itaque? Assumenda dolorem ex, dolore labore asperiores et rem voluptatum, reprehenderit nulla, aliquid culpa sed debitis! Libero excepturi iure non nobis eaque debitis, doloribus officia ipsam ut ex aut tenetur deserunt ullam totam? Quasi aliquid impedit mollitia eum alias perspiciatis, provident ad maiores obcaecati natus?",
      age: 37,
      location: "New York, USA",
    },
    {
      name: "Joey Tribbiani",
      img: "https://avatars.mds.yandex.net/i?id=af1160fd38715ad4e8cf91cc61793455e66393d2-7544543-images-thumbs&n=13",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim perferendis veniam minus nihil id mollitia eius! Numquam rem error magni corporis asperiores quis recusandae, perferendis quibusdam? Neque aut, quidem voluptates est, nesciunt ipsa odit consequuntur eius incidunt omnis nostrum, tempora sed ipsam? Fuga qui voluptatum tempore nihil obcaecati aspernatur molestiae, rem alias hic eaque vitae nisi asperiores. Esse excepturi modi, sit molestias quae fuga, earum itaque, nulla dignissimos atque illo ipsam accusantium impedit voluptates. Animi, non, fugiat, repellat eaque aut porro quas quam provident corporis magnam asperiores! Totam aliquam vel magni id autem, optio error laudantium temporibus eligendi quam?",
      age: 39,
      location: "New York, USA",
    },
    {
      name: "Chendler Bing",
      img: "https://avatars.mds.yandex.net/get-mpic/5209489/img_id3368437493097888368.jpeg/orig",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque fugiat accusamus laboriosam, illo quas dicta eius dolorem explicabo! Quas neque porro minima iste mollitia amet eaque, dolorum accusantium totam error et harum illo, pariatur sequi soluta possimus, consequatur inventore. Quam reprehenderit sit corporis eaque nam non nihil, enim officia repellendus natus perferendis voluptatibus repellat sed eum eveniet minima nulla voluptatum rerum modi dolorum. Deserunt, voluptatem! Saepe, soluta ducimus. Sapiente error accusamus nulla sint quo quaerat aliquam illum excepturi doloribus sequi quae perspiciatis nesciunt, adipisci officia blanditiis culpa, harum saepe cupiditate earum dolorem voluptatum tempora maxime laudantium asperiores. Sint, tempora.",
      age: 35,
      location: "New York, USA",
    },
  ];
  return (
    <div>
      <Greeting name="Daksh" />
      <Greeting />
      {users.map((user) => (
        <UserProfileCard
          img={user.img}
          name={user.name}
          bio={user.bio}
          age={user.age}
          location={user.location}
        />
      ))}
    </div>
  );
};

export default App;
