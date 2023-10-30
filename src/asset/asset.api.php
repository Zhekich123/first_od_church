<?php
//phpinfo();

class AssetPayments
{
    ///merchant secret key
    var $secretKey;
    ///merchant guid
    var $guid;
    ///protocol
    var  $protocol;
    ///host
    var  $host;
    //port
    var $port;
    ///api server url
    var $serverUrl;

    //sends request to app server
    protected function SendRequest($jsonData, $uri)
    {
        $curl = curl_init();
        if (!$curl)
            return false;

//var_dump($this->serverUrl.$uri);

//var_dump($jsonData)


        curl_setopt($curl, CURLOPT_URL, $this->serverUrl.$uri);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER,array('Expect: ', 'Content-Type: application/json; charset=UTF-8', 'Content-Length: '.strlen($jsonData)));
        curl_setopt($curl, CURLOPT_POSTFIELDS, $jsonData);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, True);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }

    //Returns merchant information with payment systems
    public function GetMerchantInfo()
    {
        $sign = strtoupper($this->guid .';'. $this->secretKey.';');
        //var_dump($sign);
        $request = array(
            'MerchantGuid' => $this->guid,
            'Signature' => $this->hashSignature($sign)
        );
        $response = $this->SendRequest(json_encode($request), 'GetMerchantInformation');
        return json_decode($response, true);
    }

    ///Hash signature
    public function hashSignature ($signature) {
        return hash_hmac('md5',$signature,strtoupper( $this->secretKey));
    }

    //Constructor
    public function AssetPayments($merchantSecretKey, $merchantGuid)
    {
        $this->protocol = 'https://';
        $this->host = 'api.assetpayments.us';
        $this->port = '';

        $this->serverUrl = $this->protocol . $this->host . ($this->port != '' ? ':' . $this->port : '') . '/api/payment/';
        $this->guid = $merchantGuid;
        $this->secretKey = strtoupper($merchantSecretKey);
    }

    //Create payment request
    function CreatePayment($request)
    {
        $signature = $this->guid .':' .
            $request['TransactionId'] . ':' .
            strtoupper($this->secretKey);

        $request['Signature'] = $this->hashSignature($signature);
        $response = $this->SendRequest(json_encode($request), 'Create');
        return json_decode($response, true);
    }

    //Get status response
    function getStatusResponse($requestPostRawDataString)
    {
        $request = json_decode($requestPostRawDataString);
        $signature = $this->guid .':' .
            $request['TransactionId'] . ':' .
            strtoupper($this->secretKey);
        $signature = hashSignature($signature);

        if ($request['SignatureEx'] == $signature){
            return $request;
        } else {
            throw new Exception('Invalid signature! Request: '.$requestPostRawDataString);
        }
    }
}

    //Sample create payment

	$merchantGuid = 'fb36ddff-2207-4244-aec9-96085d49492e';
	$mechantSecretkey = '10012cb5-4386-483e-81b6-85f46e97bf3c';

	//Catch form data
	$form_name = 'Anonimous';
	$form_phone = '00000';
	$form_email = empty($_POST['form_email']) ? 'charity@baptist.od.ua' : $_POST['form_email'];
	$form_address = '';
	$form_description = 'Donation';
	$form_sum = number_format($_POST['form_sum'], 2, '.', '');
  switch ($_POST['form_currency']) {
    case '₴':
      $currency = 'UAH';
      break;
    case '$':
      $currency = 'USD';
      break;
    case '€':
      $currency = 'EUR';
      break;
    default:
      $currency = 'UAH';
      break;
  }
	// $currency = $_POST['form_currency'];
	$processingid = empty($_POST['form_processingid']) ? 1642 : $_POST['form_processingid'];

    $asset = new AssetPayments($mechantSecretkey,$merchantGuid);

//Creates payment request
    $requestCreatePayment = Array(
		'ProcessingId' => 3773, // Required,
		'TemplateId' => 0,
    'SkipCheckout' => true,
		'OperationMode' => 'Iframe',
		'TransactionType' => 'Sale', //Required
		'MerchantInternalOrderId' => 'Donation',
                'MerchantInternalUserId' => '12',
		'FirstName' => $form_name,
                'LastName' => 'Surname',
                'Phone' => $form_phone,
		'Email' => $form_email,  // Required
		'Address' => $form_address,
		'Zone' => 'Zone',
		'City' => 'City',
		'Region' => 'Region',
                'State' => 'State',
                'ZIP' => '41341',
		'CountryIso' => 'UA', // Required
		'ConvertText' => false,
		'StatusUrl' => 'https://site.com/status',
                'ReturnUrl' => 'http://baptist.od.ua/success.php',
		'DynamicDescriptor' => 'Donation',
		'CustomMerchantInfo' => $form_description,
		'Amount' => $form_sum, // Required
		'Currency' => $currency,  // Required
                'AssetPaymentsKey' => $merchantGuid,  // Required
		'IpAddress' => '10.10.10.127',
			);

    // echo "req: <br>\n";
    // print_r($requestCreatePayment);

    $result = $asset->CreatePayment($requestCreatePayment);

    // echo "resp: <br>\n";
    // print_r($result);

	$externalForm  = $result['htmlIframeForm']; // External form to redirect user. This form should be showed on user web page
    $OrderId = $result['transactionId']; //Order uniq id

    echo $externalForm;
