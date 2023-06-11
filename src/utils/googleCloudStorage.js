const { Storage } = require('@google-cloud/storage');

// Khởi tạo instance của lớp Storage
const storage = new Storage();

// Tải lên hình ảnh vào bucket trong Google Cloud Storage
async function uploadImageToGCS(bucketName, file, destinationFileName) {
    try {
        await storage.bucket(bucketName).upload(file, {
            destination: destinationFileName,
            public: true, // Đặt quyền truy cập công khai cho hình ảnh
        });

        console.log(`Hình ảnh đã được tải lên vào bucket: ${bucketName}`);
    } catch (error) {
        console.error('Lỗi khi tải lên hình ảnh:', error);
    }
}

// Sử dụng phương thức uploadImageToGCS
uploadImageToGCS('tên_bucket', 'đường_dẫn_tới_file_hình_ảnh', 'tên_tệp_tải_lên.png');
