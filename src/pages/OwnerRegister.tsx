const {
  data: { session },
} = await supabase.auth.getSession();

console.log("Session:", session);
import { supabase } from "../supabaseClient.ts";
import { useState } from "react";
function OwnerRegister() {
    const [submitted, setSubmitted] = useState(false);
    const [ownerName, setOwnerName] = useState("");
    const [mobile, setMobile] = useState("");
    const [location, setLocation] = useState("");
    const [rent, setRent] = useState("");
    const [roomType, setRoomType] = useState("");
   const [description, setDescription] = useState("");
   const [image, setImage] = useState<File | null>(null);
   const [facilities, setFacilities] = useState<string[]>([]);
   

const handleFacilityChange = (facility: string) => {
  if (facilities.includes(facility)) {
    setFacilities(facilities.filter((item) => item !== facility));
  } else {
    setFacilities([...facilities, facility]);
  }
};
  const handleSubmit = async () => {

let imageUrl = "";

if (image) {

  const fileName = `${Date.now()}-${image.name}`;

  const { error: uploadError } = await supabase.storage
    .from("room-images")
    .upload(fileName, image);


  if (uploadError) {
    console.log("Image Upload Error:", uploadError.message);
    return;
  }


  const { data } = supabase.storage
    .from("room-images")
    .getPublicUrl(fileName);


  imageUrl = data.publicUrl;

}

const { data } = await supabase.auth.getUser();

const user = data.user;

if (!user) {
  alert("Please login first");
  return;
}
const { error } = await supabase
.from("rooms")
.insert([
{
owner_id: user.id,
owner_name: ownerName,
mobile: mobile,
location: location,
rent: rent,
room_type: roomType,
description: description,
facilities: facilities.join(", "),
image_url: imageUrl,

},
]);


if (error) {
console.log("Supabase Error:", error.message);
return;
}


setSubmitted(true);

};

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-blue-950 text-center">
          List Your Room
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Apne room ki details add kare
        </p>


        <div className="mt-8 space-y-5">

          <input
  className="w-full px-5 py-3 rounded-xl border"
  placeholder="Owner Name"
  value={ownerName}
  onChange={(e) => setOwnerName(e.target.value)}
/>
<p className="text-gray-600">
  Owner Name: {ownerName}
</p>
         <input
  className="w-full px-5 py-3 rounded-xl border"
  placeholder="Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
/> 
<p>
  Mobile: {mobile}
</p>
       <input
  className="w-full px-5 py-3 rounded-xl border"
  placeholder="Room Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>  

<p className="text-gray-600">
  Location: {location}
</p>

          <input
  className="w-full px-5 py-3 rounded-xl border"
  placeholder="Monthly Rent"
  value={rent}
  onChange={(e) => setRent(e.target.value)}
/>

<p className="text-gray-600">
  rent: Number(rent),
</p>

<select
  className="w-full px-5 py-3 rounded-xl border"
  value={roomType}
  onChange={(e) => setRoomType(e.target.value)}
>
  <option value="">
    Select Room Type
  </option>

  <option value="Single Room">
    Single Room
  </option>

  <option value="Double Room">
    Double Room
  </option>

  <option value="PG Room">
    PG Room
  </option>

</select>
<div className="border rounded-2xl p-5">
  <h3 className="text-xl font-bold text-blue-950 mb-4">
    🏠 Room Facilities
  </h3>

  <div className="grid grid-cols-2 gap-4">

    {[
      "Bed",
      "WiFi",
      "Attached Bathroom",
      "Parking",
      "AC",
      "Kitchen"
    ].map((item) => (

      <label
        key={item}
        className="flex items-center gap-3 bg-slate-100 p-3 rounded-xl cursor-pointer hover:bg-teal-50 transition"
      >

        <input
          type="checkbox"
          checked={facilities.includes(item)}
          onChange={() => handleFacilityChange(item)}
          className="w-5 h-5"
        />

        <span className="font-medium text-gray-700">
          {item}
        </span>

      </label>

    ))}

  </div>
</div>

<p className="text-gray-600">
  Room Type: {roomType}
</p>

<input
  type="file"
  accept="image/*"
  className="w-full px-5 py-3 rounded-xl border"
  onChange={(e) => setImage(e.target.files?.[0] || null)}
/>


<textarea
  className="w-full px-5 py-3 rounded-xl border"
  placeholder="Room Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>

<p className="text-gray-600">
  Description: {description}
</p>

    <button
  onClick={handleSubmit}
  className="w-full bg-teal-500 text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
>
  Submit Room
  
</button> 
{submitted && (
  <div className="mt-6 bg-green-100 border border-green-400 rounded-2xl p-5 text-center">

    <h3 className="text-2xl font-bold text-green-700">
      🎉 Room Submitted!
    </h3>

    <p className="mt-2 text-gray-700">
      Aapki room listing review ke liye bhej di gayi hai.
      Verification ke baad users ko dikhai jayegi.
    </p>

  </div>
)}

        </div>

      </div>

    </div>
  );
}

export default OwnerRegister;