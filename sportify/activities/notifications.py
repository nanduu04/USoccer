from pyfcm import FCMNotification

def send_notification(title, message, registration_ids):
    push_service = FCMNotification(api_key="YOUR_FIREBASE_SERVER_KEY")
    result = push_service.notify_multiple_devices(
        registration_ids=registration_ids,
        message_title=title,
        message_body=message
    )
    return result
