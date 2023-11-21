import {stayService} from "../../services/stay.service"

export async function loadStays(){
  try{
    const stays = await stayService.query();
  }
  catch (err) {
    console.log("Had issues loading stays", err);
  }
}