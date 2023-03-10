<?php

	namespace app\util;

	class Imgcompress
	{
		private $src;
		private $image;
		private $imageinfo;
		private $percent;

		/**
		 * 图片压缩
		 *
		 * @param       $src     源图
		 * @param float $percent 压缩比例
		 */
		public function __construct ($src, $percent)
		{
			$this->src     = $src;
			$this->percent = $percent;
		}

		/** 高清压缩图片
		 *
		 * @param string $saveName 提供图片名（可不带扩展名，用源图扩展名）用于保存。或不提供文件名直接显示
		 */
		public function compressImg ($saveName = '')
		{
			$this->_openImage();
			if (!empty($saveName))
				$this->_saveImage($saveName); //保存

			return $saveName;
		}

		/**
		 * 内部：打开图片
		 */
		private function _openImage ()
		{
			[$width, $height, $type, $attr] = getimagesize($this->src);
			$this->imageinfo = [
				'width'  => $width,
				'height' => $height,
				'type'   => image_type_to_extension($type, false),
				'attr'   => $attr
			];
			$fun             = "imagecreatefrom" . $this->imageinfo['type'];
			$this->image     = $fun($this->src);
			$this->_thumpImage();
		}

		/**
		 * 内部：操作图片
		 */
		private function _thumpImage ()
		{
			$new_width    = $this->imageinfo['width'] * $this->percent;
			$new_height   = $this->imageinfo['height'] * $this->percent;
			$image_thump  = imagecreatetruecolor($new_width, $new_height);
			$image_thump2 = imagecreatetruecolor($this->imageinfo['width'], $this->imageinfo['height']);
			//将原图复制带图片载体上面，并且按照一定比例压缩,极大的保持了清晰度
			imagecopyresampled($image_thump, $this->image, 0, 0, 0, 0, $new_width, $new_height, $this->imageinfo['width'], $this->imageinfo['height']);
			imagedestroy($this->image);
			$this->image = $image_thump;
			imagecopyresampled($image_thump2, $image_thump, 0, 0, 0, 0, $this->imageinfo['width'], $this->imageinfo['height'], $new_width, $new_height);
			imagedestroy($image_thump);
			$this->image = $image_thump2;
		}

		/**
		 * 保存图片到硬盘：
		 *
		 * @param string $dstImgName 、可指定字符串不带后缀的名称，使用源图扩展名 。、直接指定目标图片名带扩展名。
		 */
		private function _saveImage ($dstImgName)
		{
			if (empty($dstImgName))
				return false;
			$allowImgs = ['.jpg', '.jpeg', '.png', '.bmp', '.wbmp', '.gif'];  //如果目标图片名有后缀就用目标图片扩展名 后缀，如果没有，则用源图的扩展名
			$dstExt    = strrchr($dstImgName, ".");
			$sourseExt = strrchr($this->src, ".");
			if (!empty($dstExt))
				$dstExt = strtolower($dstExt);
			if (!empty($sourseExt))
				$sourseExt = strtolower($sourseExt);
			//有指定目标名扩展名
			if (!empty($dstExt) && in_array($dstExt, $allowImgs)) {
				$dstName = $dstImgName;
			} elseif (!empty($sourseExt) && in_array($sourseExt, $allowImgs)) {
				$dstName = $dstImgName . $sourseExt;
			} else {
				$dstName = $dstImgName . $this->imageinfo['type'];
			}
			$funcs = "image" . $this->imageinfo['type'];
			$funcs($this->image, $dstName);
		}

		/**
		 * 销毁图片
		 */
		public function __destruct ()
		{
			imagedestroy($this->image);
		}
	}