const testimonials = [
    {
      photo:
        "https://www.heckler-koch.com/_assets/thumbnail/1353/product-stage/webp",
      text: `The design of the HK416 reduces the offset from the barrel to the sight radius when aiming. In addition, the full-length NATO STANAG 4694 Picatinny rail ensures that, in addition to mechanical or opto-electronic sights, there is also sufficient space for night vision attachments, thus giving the HK416 unrestricted day/night combat capability. On the one hand, the optimised receiver geometry offers ideal shooter ergonomics and handling benefits, in that all controls relevant to the shooter can be operated from the right as well as from the left and can be reached quickly. On the other hand, the receiver, the mechanics and the barrel geometry are so dimensionally accurate that the precision parameters of the HK416 are well above those of comparable assault rifle models. The HK416’s tool-free gas adjustment also allows the use of signature suppressors at any time. The HK416 is a must-have for all soldiers if they want to have a technical and tactical advantage`,
      name: "HK416"
  },
  
  {
      photo:"https://www.heckler-koch.com/_assets/thumbnail/1349/product-slider/webp",
      text:`The main variants MP5, MP5 SD and MP5 K in their respective individual configurations show what classic submachine guns in calibre 9 mm x 19 can deliver today. The MP5 is primarily aimed at police units and first response forces engaging area targets. Easy to handle, easy to control and uncompromisingly precise in an emergency. The MP5 SD, on the other hand, fulfils the weaponry requirements of specialised forces and selected special units. What distinguishes it from all submachine guns available on the market, however, is its special weapon barrel with integrated silencer. Where other submachine guns have to use special subsonic ammunition for silenced use, the MP5 SD fires supersonic ammunition in the subsonic range (&lt;340 m/s). It is also one of the most precise silenced submachine guns in its class. As the most compact submachine gun in the MP5 family, the MP5 K is designed primarily for special forces and bodyguards. Effective in close-range defence and built so compactly that it can easily be carried concealed on the body.`,
      name:"HK MP5"
  },
  {
      photo:"https://www.heckler-koch.com/_assets/thumbnail/1335/product-stage/webp",
      text:`The smaller cross-section of the 4.6 mm x 30 NATO round, unlike the 9 mm x 19 round, enables it to penetrate modern body armour with steel-core ammunition. The geometry of the bullet with its rear centre of gravity ensures that the projectile rolls over in the target and releases most of its energy there. The risk of a potential overpenetration for uninvolved third parties is thus significantly reduced.`,
      name:"HK MP7"
  },
  {
      photo:"https://www.heckler-koch.com/_assets/thumbnail/1328/product-stage/webp",
      text:`The HK UMP is freely configurable with regard to its features. The optional equipment portfolio ranges from the classic skeleton buttstock to the use of tactical helmet buttstock variants. The UMP is available as a semi-automatic or fully automatic submachine gun. Individual trigger group combinations can easily be realised due to the modular grip design. MIL-STD-1913 Picatinny rails at 3, 6, 9 and 12 o'clock provide ample mounting space for the use of tactical deployment aids. If required, the silencer is accommodated directly at the barrel interface.`,
      name: "HK UMP"
  },
  
  {
      photo:"https://www.heckler-koch.com/_assets/thumbnail/1409/product-stage/webp",
      text:`The HK433 is the first hybrid weapon platform with a revolutionary operating concept. In stressful situations, users should be able to operate their weapon intuitively and on the basis of learned automatisms, without additional training. At best, also with different calibres. The solution: An interchangeable lower receiver with two different operating modes. There is a choice of the push-button operating mode for users trained on HK416/AR-15 systems and paddle handling for trained G36/MP5/G3 users. The operating elements are arranged on both sides and symmetrically. Both lower receivers are equipped with a drop-in trigger as standard to optimally adapt the trigger characteristics. The safety catch - to secure the weapon in all loading states - is a standard component of the weapon system. We have not restricted this novel operating concept to the calibre 5.56 mm x 45 NATO. On the contrary, this concept forms the cross-calibre foundation of a new type of weapon platform. Here, for example, calibres such as 300 Blackout and 7.62 mm x 51 NATO. in short: One weapon. Two operating modes. Calibre-independent.`,
      name: "HK 433"
  }
  ];
  
  const imageElement =document.getElementById("image");
  const testimonialElements =document.getElementById("testimonial");
  const nameElement = document.getElementById("name");
  
  let currentindex =0;
  
  function upadte(){
      const {photo, text, name} =testimonials[currentindex];
      imageElement.src =photo;
      testimonialElements.textContent =text;
      nameElement.textContent =name;
  
      currentindex =(currentindex+1)% testimonials.length
  }
  
  upadte();
  setInterval(upadte,5000);