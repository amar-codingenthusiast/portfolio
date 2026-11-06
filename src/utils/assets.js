const assetFiles = import.meta.glob("../Components/Images/*", {
	eager: true,
	import: "default",
});

export const getAsset = (fileName) => {
	if (!fileName) return "";
	if (fileName.startsWith("http://") || fileName.startsWith("https://")) {
		return fileName;
	}
	const path = `../Components/Images/${fileName}`;
	return assetFiles[path] || "";
};

