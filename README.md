# RoomManagementApp

## information
部室のRaspberryPiに入れる用の部室入退室管理アプリ.

## Installation
	#run as root
	$git clone https://ryoctrl/RoommanagementApp.git
	$cd RoommanagementApp

	$npm install readline-sync
	$apt-get install libpcap-dev
	$npm install node-dash-button

## usage

	# run as root
	$nohup node index.js &

## ToDo
	
	- nohupで実行するため、学籍番号とパスワードを入力できない問題
	- DashButtonのタチャリングに対応する
	- 動作ログと#raspberryとの同期
	- リファクタリング&リストラクチャリング
		
## History

	- Authに用いるIDとPasswordのdummyで用意	
