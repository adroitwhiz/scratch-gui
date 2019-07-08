const SUPPORTED_IMAGE_FILE_TYPES = [
    {
        // JPEG
        format: 'JPG', // "Canonical" data format. Does *NOT* necessarily correspond to a ScratchStorage.DataFormat.
        extensions: ['.jpg', '.jpeg'], // All file extensions this format can have.
        mimetypes: ['image/jpeg'] // All MIME types this format can have.
    },
    {
        // PNG
        format: 'PNG',
        extensions: ['.png'],
        mimetypes: ['image/png']
    },
    {
        // BMP
        format: 'BMP',
        extensions: ['.bmp'],
        mimetypes: ['image/bmp']
    },
    {
        // SVG
        format: 'SVG',
        extensions: ['.svg'],
        mimetypes: ['image/svg+xml']
    }
];

const SUPPORTED_AUDIO_FILE_TYPES = [
    {
        // WAV
        format: 'WAV',
        extensions: ['.wav'],
        mimetypes: ['audio/wav', 'audio/wave', 'audio/x-wav', 'audio/x-pn-wav']
    },
    {
        // MP3
        format: 'MP3',
        extensions: ['.mp3'],
        mimetypes: ['audio/mp3', 'audio.mpeg']
    }
];

// Concatenate arrays under a certain object attribute in an array of objects.
// Produces e.g. [".jpeg", ".jpg", ".png", ...]
const allOfAttribute = (arr, attributeName) => arr.reduce((acc, val) => acc.concat(val[attributeName]), []);

// Construct a map from arrays of arrays of values to their corresponding keys.
// Produces e.g. {"audio/wav": "WAV", "audio/x-wav": "WAV", "audio/mp3": "MP3", ...}
const mapAttribute = (arr, attributeName, keyName) => {
    const map = {};
    arr.forEach(item => {
        item[attributeName].forEach(sub => {
            map[sub] = item[keyName];
        });
    });
    return map;
};

export const SUPPORTED_IMAGE_EXTENSIONS = allOfAttribute(SUPPORTED_IMAGE_FILE_TYPES, 'extensions');
export const SUPPORTED_IMAGE_MIMETYPES = allOfAttribute(SUPPORTED_IMAGE_FILE_TYPES, 'mimetypes');
export const SUPPORTED_IMAGE_MIMETYPE_MAP = mapAttribute(SUPPORTED_IMAGE_FILE_TYPES, 'mimetypes', 'format');

export const SUPPORTED_AUDIO_EXTENSIONS = allOfAttribute(SUPPORTED_AUDIO_FILE_TYPES, 'extensions');
export const SUPPORTED_AUDIO_MIMETYPES = allOfAttribute(SUPPORTED_AUDIO_FILE_TYPES, 'mimetypes');
export const SUPPORTED_AUDIO_MIMETYPE_MAP = mapAttribute(SUPPORTED_AUDIO_FILE_TYPES, 'mimetypes', 'format');
