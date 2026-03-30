const ImageKit = require('@imagekit/nodejs');



const imagekit = new ImageKit({

    privateKey:"private_jW0T1z9yU7xV3xP2xXSTu5l07ig=",
    publicKey:"public_Vd731SqFFdRcAdQTs/Srt5nJnHo=",
    urlEndpoint: "https://ik.imagekit.io/3c1hykdnu"
})  


async function uploadFile(buffer){

    const result = await imagekit.files.upload({
        file:buffer.toString('base64'),
        fileName: "image.jpg"
    })

    return result;
}

module.exports = uploadFile;