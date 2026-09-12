import {FilesetResolver, ImageSegmenter} from './mediapipe/vision_bundle.mjs';
let pending;
export function loadSegmenter(key){
  if(!pending) pending=(async()=>{
    const base=new URL('./mediapipe/',import.meta.url).href;
    const files=await FilesetResolver.forVisionTasks(base.replace(/\/$/,''));
    
    const model=new URL('../assets/selfie_segmenter.tflite',import.meta.url);
    return ImageSegmenter.createFromOptions(files,{baseOptions:{modelAssetPath:model.href,delegate:'CPU'},runningMode:'VIDEO',outputCategoryMask:false,outputConfidenceMasks:true});
  })().catch(e=>{pending=null;throw e});
  return pending;
}
