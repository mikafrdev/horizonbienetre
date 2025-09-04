const Infos = {
    tel : "+33621037744",
    adress : {
        street: "45 rue Claude Bernard",
        cp: "59200",
        town: "Tourcoing",
    },
    email : "horizonbienetre5@gmail.com",
    facebook : "https://www.facebook.com/Horizonbienetre59",
    instagram : "https://www.instagram.com/horizon.bien.etre/"
};

/* const infosa = [
    tel = "01 02 03 04 05",
    adress = "45 rue Claude Bernard <br /> 59200 Tourcoing",
    email = "horizonbienetre5@gmail.com",
    facebook = "https://www.facebook.com/Horizonbienetre59",
    instagram = "horizon.bien.etre"
]; */

export default Infos;

export function formatPhoneNumber(tel) {
  const local = tel.replace('+33', '0');
  return local.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
}